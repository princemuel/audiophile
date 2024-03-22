import { defineMeta } from '@/config';
import { HomeTemplate } from './home';

export const metadata = defineMeta({ title: 'Home' });

export default function PageRoute() {
  return (
    <main aria-labelledby='heading' className='flex flex-col gap-48'>
      <HomeTemplate />
    </main>
  );
}
