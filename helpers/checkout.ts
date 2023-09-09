import { approximate } from './utils';

export const shippingFee = (amount: number) => {
  const fee = amount * 0.01;
  return approximate(fee);
};

export const vatFee = (amount: number) => {
  const fee = amount * 0.001;
  return approximate(fee);
};

export const grandTotal = (total: number, shipping: number, vat: number) => {
  const fee = total + shipping + vat;
  return approximate(fee);
};
