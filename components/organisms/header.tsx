import { DesktopNavigation } from './desktop-navigation';
import { LayoutHeader } from './layout-header';
import { MobileNavigation } from './mobile-navigation';

interface Props {}

const Header = () => {
  return (
    <LayoutHeader>
      <nav aria-label='Primary Navigation' className='relative w-full'>
        <DesktopNavigation className='pointer-events-auto hidden w-full lg:block' />
        <MobileNavigation className='pointer-events-auto w-full lg:hidden' />
      </nav>
    </LayoutHeader>
  );
};

export { Header };
