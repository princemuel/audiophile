import React from 'react';
import { GlobalOverlay } from './styles';

type Props = {
  children: React.ReactNode;
};

const Overlay = ({ children }: Props) => {
  return <GlobalOverlay>{children}</GlobalOverlay>;
};

export { Overlay };
