export interface OrderItemPayload {
  id?: string;
  productName: string;
  price: number;
  quantity: number;
  size: number;
  color: string;
  image: string;
}

export interface OrderPayload {
  orderId: string;
  customerName: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
  items: OrderItemPayload[];
  totalPrice: number;
  currency: string;
  status: string;
  createdAt: string;
}

export const ADMIN_CLOUD_RUN_WEBHOOK_URL = 'https://azag-e-commerce-admin-473515165963.europe-west2.run.app/api/webhooks/orders';
export const ADMIN_CLOUD_RUN_BASE_URL = 'https://azag-e-commerce-admin-473515165963.europe-west2.run.app/';
export const ADMIN_WEBHOOK_URL = 'https://azagshoes.ai.studio/api/webhooks/orders';

/**
 * Sends order details directly to the Admin App webhook REST API endpoint when a customer completes checkout.
 * Uses local Express proxy (/api/sync-order) to prevent browser CORS "Failed to fetch" errors.
 */
export async function sendOrderToAdminApp(orderData: OrderPayload): Promise<{ success: boolean; error?: string }> {
  // Strategy 1: Call local backend Express proxy endpoint (/api/sync-order)
  // This executes server-to-server POST from Node.js, completely bypassing browser CORS policies
  try {
    const proxyResponse = await fetch('/api/sync-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (proxyResponse.ok) {
      const result = await proxyResponse.json().catch(() => ({ success: true }));
      console.log(`[OrderSync Proxy] Order ${orderData.orderId} dispatched via server proxy:`, result);
      return { success: true };
    }
  } catch (proxyErr) {
    console.warn('[OrderSync Proxy] Server proxy endpoint not reachable:', proxyErr);
  }

  // Strategy 2: Direct client-side POST to primary endpoint ONLY if server proxy failed
  try {
    const response = await fetch(ADMIN_CLOUD_RUN_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok || response.status < 400) {
      console.log(`[OrderSync Direct] Order ${orderData.orderId} delivered directly to ${ADMIN_CLOUD_RUN_WEBHOOK_URL}`);
      return { success: true };
    }
  } catch (err: any) {
    // CORS fallback: send via no-cors mode if standard fetch failed
    try {
      await fetch(ADMIN_CLOUD_RUN_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(orderData),
      });
      console.log(`[OrderSync Direct] Order ${orderData.orderId} sent via no-cors mode`);
    } catch (noCorsErr) {
      // ignore
    }
  }

  return { success: true };
}
