import { Footer, Header } from '@/components';
import { defineMeta } from '@/config';
import { Providers } from '@/context';

import './globals.css';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],
};

import type { Metadata } from 'next';

export const metadata: Metadata = defineMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr' className='selection:bg-brand-500 selection:text-white'>
      <body className='min-h-vh relative bg-white font-sans antialiased'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
