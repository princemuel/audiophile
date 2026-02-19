import { Container } from '@/components';
import { defineMeta } from '@/config';
import { CheckoutForm } from './form';
import { BackButton } from './go-back';

import type { Metadata } from 'next';

export const metadata: Metadata = defineMeta({ title: 'Checkout' });

export default function Page() {
  return (
    <main className='flex flex-col gap-24 md:bg-gray-50'>
      <Container>
        <div className='my-16'>
          <BackButton />
        </div>

        <CheckoutForm />
      </Container>
    </main>
  );
}
