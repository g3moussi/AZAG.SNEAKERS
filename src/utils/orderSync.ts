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

export const ADMIN_APP_BASE_URL = 'https://azagshoes.ai.studio';

/**
 * Sends order details to the Admin App REST API endpoint when a customer completes checkout.
 */
export async function sendOrderToAdminApp(orderData: OrderPayload): Promise<{ success: boolean; error?: string }> {
  const endpoints = [
    `${ADMIN_APP_BASE_URL}/api/orders`,
    `${ADMIN_APP_BASE_URL}/api/order`
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
        console.log(`[OrderSync] Order ${orderData.orderId} sent successfully to ${endpoint}`);
        return { success: true };
      } else {
        const text = await response.text();
        lastError = `HTTP ${response.status}: ${text || response.statusText}`;
        console.warn(`[OrderSync] Failed with status ${response.status} from ${endpoint}`);
      }
    } catch (err: any) {
      lastError = err?.message || 'Network error';
      console.error(`[OrderSync] Error sending to ${endpoint}:`, err);
    }
  }

  return { success: false, error: lastError };
}
