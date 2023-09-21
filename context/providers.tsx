import { CartModal, CheckoutModal } from '@/components';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <React.Fragment>
      <Modals />
      {children}
    </React.Fragment>
  );
}

function Modals() {
  return (
    <React.Fragment>
      <CartModal />
      <CheckoutModal />
    </React.Fragment>
  );
}
