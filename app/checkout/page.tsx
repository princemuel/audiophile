import { CheckoutTemplate } from './checkout';

export default function PageRoute() {
  return (
    <main className='flex flex-col gap-24 md:bg-zinc-50'>
      <CheckoutTemplate />
    </main>
  );
}
