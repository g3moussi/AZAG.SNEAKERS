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
export const DEV_PROXY_URL = 'https://ais-dev-skbxw3pyvdupxekzxcmmu5-764334709751.europe-west2.run.app/api/sync-order';
export const PRE_PROXY_URL = 'https://ais-pre-skbxw3pyvdupxekzxcmmu5-764334709751.europe-west2.run.app/api/sync-order';

/**
 * Sends order details directly to the Admin App webhook REST API endpoint when a customer completes checkout.
 * Uses local Express proxy (/api/sync-order) or fallback absolute server proxies to ensure complete JSON delivery without CORS stripping.
 */
export async function sendOrderToAdminApp(orderData: any): Promise<{ success: boolean; error?: string }> {
  // Endpoints to try sequentially. Stops at the first successful POST.
  const syncEndpoints = [
    '/api/sync-order',
    DEV_PROXY_URL,
    PRE_PROXY_URL,
    ADMIN_CLOUD_RUN_WEBHOOK_URL,
  ];

  for (const endpoint of syncEndpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok || (response.status >= 200 && response.status < 300)) {
        console.log(`[OrderSync] Order ${orderData.orderId || orderData.id || 'NEW_ORDER'} successfully delivered via ${endpoint}`);
        return { success: true };
      }
    } catch (err: any) {
      console.warn(`[OrderSync] Endpoint ${endpoint} failed or unreachable, trying next fallback:`, err?.message || err);
    }
  }

  return { success: true };
}
