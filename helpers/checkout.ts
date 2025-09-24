import { approximate } from './utils';

const shippingFee = (amount: number) => {
  const fee = amount * 0.01;
  return approximate(fee);
};

function vatFee(amount: number) {
  const fee = amount * (20 / 100);
  return approximate(fee);
}

const grandTotal = (amount: number, shipping: number) => {
  const fee = amount + shipping;
  return approximate(fee);
};

function getCartItemCount(items: CartItem[], productId: string) {
  return items.find((item) => item.slug === productId)?.quantity || 0;
}

const formatAmount = (price = 0) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

export { formatAmount, getCartItemCount, grandTotal, vatFee };
