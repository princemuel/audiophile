export const shippingFee = (amount: number) => {
  const fee = amount * 0.01;
  return parseInt(fee.toFixed(0));
};

export const vatFee = (amount: number) => {
  const fee = amount * 0.001;
  return parseInt(fee.toFixed(0));
};

export const grandTotal = (total: number, shipping: number, vat: number) => {
  const fee = total + shipping + vat;
  return parseInt(fee.toFixed(0));
};
