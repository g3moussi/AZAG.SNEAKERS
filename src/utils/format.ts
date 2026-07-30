export type Currency = 'MAD' | 'EUR' | 'USD';

export function formatPrice(priceInMAD: number, currency: Currency = 'MAD'): string {
  switch (currency) {
    case 'EUR':
      const priceEur = Math.round((priceInMAD / 10.8) * 10) / 10;
      return `${priceEur} €`;
    case 'USD':
      const priceUsd = Math.round((priceInMAD / 10) * 10) / 10;
      return `$${priceUsd}`;
    case 'MAD':
    default:
      return `${priceInMAD} DH`;
  }
}
