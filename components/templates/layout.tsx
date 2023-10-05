import * as React from 'react';
import { BreakpointIndicator } from '../atoms';
import { Footer, Header } from '../organisms';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <BreakpointIndicator />
    </React.Fragment>
  );
}
