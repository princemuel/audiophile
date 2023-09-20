import * as React from 'react';
import { ModalProvider } from './modals';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <React.Fragment>
      <ModalProvider>{children}</ModalProvider>
    </React.Fragment>
  );
}
