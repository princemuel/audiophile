'use client';

import { tw } from '@/helpers';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const LayoutHeader = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <header className={tw('sticky top-0 z-30', pathname === '/' ? 'bg-[#0E0E0E]' : 'bg-black')}>
      {children}
    </header>
  );
};

export { LayoutHeader };
