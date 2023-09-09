import { HomeTemplate } from './home';

export const metadata = {
  title: 'Home - Audiophile',
};

export default function PageRoute() {
  return (
    <main aria-labelledby='heading' className='flex flex-col gap-48'>
      <HomeTemplate />
    </main>
  );
}
