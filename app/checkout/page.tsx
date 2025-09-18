import { Container } from '@/components';
import { defineMeta } from '@/config';
import { CheckoutForm } from './form';
import { BackButton } from './go-back';

export const metadata = defineMeta({ title: 'Checkout' });

export default function Page() {
  return (
    <main className='flex flex-col gap-24 md:bg-zinc-50'>
      <Container>
        <div className='my-16'>
          <BackButton />
        </div>

        <CheckoutForm />
      </Container>
    </main>
  );
}
