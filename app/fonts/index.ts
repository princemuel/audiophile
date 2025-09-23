import { tw } from '@/helpers';
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

const FontSansLocal = localFont({
  src: './manrope.ttf',
  variable: '--font-family-sans',
  preload: true,
});
const FontSansProd = Manrope({
  subsets: ['latin'],
  variable: '--font-family-sans',
  preload: true,
});

const FontSans = (() =>
  // this hack enables using the local font which helps me work on the site while offline
  // the prod font will not be used unless in production
  process.env.NODE_ENV !== 'production' ? FontSansLocal : FontSansProd)();

export const fontVars = tw(FontSans.variable);
