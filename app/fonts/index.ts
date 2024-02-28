import { cn } from '@/helpers';
import { Manrope } from 'next/font/google';

const FontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontVars = cn(FontSans.variable);
