import { BaseLayout } from '@/components';
import { defineMeta } from '@/config';
import { Providers } from '@/context';
import { fontVars } from './fonts';
import type { Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],
};

export const metadata = defineMeta();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr' className={fontVars}>
      <body className='relative selection:bg-brand-500 selection:text-white'>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
