import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';

interface Props {
  className?: string;
}

const LayoutHeader = ({ className }: Props) => {
  return (
    <header className='sticky top-0 z-30 bg-[#0E0E0E]'>
      <nav aria-label='Primary Navigation' className='relative w-full'>
        <DesktopNavigation className='pointer-events-auto hidden w-full lg:block' />
        <MobileNavigation className='pointer-events-auto w-full lg:hidden' />
      </nav>
    </header>
  );
};
export { LayoutHeader };
