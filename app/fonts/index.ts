import { tw } from '@/helpers';
import { Manrope } from 'next/font/google';

const FontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-family-sans',
  //   display: 'swap',
});

export const fontVars = tw(FontSans.variable);
