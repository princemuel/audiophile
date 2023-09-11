import { routes } from '@/common';
import { PageLink } from './page-link';

function PageLinks() {
  return (
    <div className='grid grid-cols-1 gap-20 sm:grid-cols-3 sm:gap-2 md:gap-7'>
      {routes.slice(1).map((route) => (
        <PageLink key={`category-${route.text}`} route={route} />
      ))}
    </div>
  );
}

export { PageLinks };
