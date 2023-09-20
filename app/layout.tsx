import { BaseLayout } from '@/components';
import { seo } from '@/config';
import { Providers } from '@/context';
import { fonts } from './fonts';
import './globals.css';

export const metadata = seo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={fonts}>
      <body className='relative selection:bg-brand-500 selection:text-white'>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
