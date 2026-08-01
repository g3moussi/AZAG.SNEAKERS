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

export const ADMIN_WEBHOOK_URL = 'https://azagshoes.ai.studio/api/webhooks/orders';

/**
 * Sends order details directly to the Admin App webhook REST API endpoint when a customer completes checkout.
 */
export async function sendOrderToAdminApp(orderData: OrderPayload): Promise<{ success: boolean; error?: string }> {
  const endpoints = [
    ADMIN_WEBHOOK_URL,
    'https://azagshoes.ai.studio/api/orders',
    'https://azagshoes.ai.studio/api/order'
  ];

  let lastError = '';

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log(`[OrderSync] Order ${orderData.orderId} successfully delivered to ${endpoint}`);
        return { success: true };
      } else {
        const text = await response.text();
        lastError = `HTTP ${response.status}: ${text || response.statusText}`;
        console.warn(`[OrderSync] Response status ${response.status} from ${endpoint}`);
      }
    } catch (err: any) {
      lastError = err?.message || 'Network error';
      console.error(`[OrderSync] Failed to post to ${endpoint}:`, err);
    }
  }

  // Return true even if network fails in demo preview so the customer gets their confirmation UI gracefully
  return { success: false, error: lastError };
}
