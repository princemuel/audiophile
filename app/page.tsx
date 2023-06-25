import { Button } from '@/components/atoms/button';

export default function PageRoute() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Page</h1>
      <Button href={'/'}>Hello</Button>
    </main>
  );
}
