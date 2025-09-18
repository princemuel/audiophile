import { Footer, Header } from '@/components';
import { defineMeta } from '@/config';
import { Providers } from '@/context';
import { fontVars } from './fonts';

import './globals.css';

import { tw } from '@/helpers';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],
};

export const metadata = defineMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={tw(fontVars, 'selection:bg-brand-500 selection:text-white')}
    >
      <body className='min-h-vh relative font-sans antialiased'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
