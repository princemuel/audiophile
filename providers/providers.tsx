'use client';

import { CartModal, CheckoutModal } from '@/components';
import { ModalProvider, useModal } from '@/lib';
import { Fragment } from 'react';

interface Props {
  children: React.ReactNode;
}

function Modals({ children }: Props) {
  const register = useModal().register;

  register('cart-modal', <CartModal />);
  register('checkout-modal', <CheckoutModal />);
  return <Fragment>{children}</Fragment>;
}

export function Providers({ children }: Props) {
  return (
    <ModalProvider>
      <Modals>{children}</Modals>
    </ModalProvider>
  );
}
