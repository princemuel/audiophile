import { cn } from '@/helpers';
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

const isProduction = process.env.NODE_ENV === 'production';

const FontSans_Dev = localFont({
  src: './manrope.ttf',
  variable: '--font-sans',
  display: 'swap',
});

const FontSans_Prod = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fonts = cn(
  isProduction ? FontSans_Prod.variable : FontSans_Dev.variable
);
