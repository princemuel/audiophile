import { CartModal, CheckoutModal } from '@/components';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartModal />
      <CheckoutModal />
      {children}
    </>
  );
}
