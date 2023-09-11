import { icons, routes } from '@/common';
import { cn } from '@/helpers';
import { Button, Container, LogoIcon, NavLink } from '../atoms';

interface Props {
  className?: string;
}

const DesktopNavigation = ({ className }: Props) => {
  return (
    <div className={cn('', className)}>
      <Container>
        <section className='flex items-center py-9'>
          <LogoIcon className=' text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500' />

          <ul className='ml-auto mr-auto flex flex-col items-center gap-5 md:flex-row md:gap-8'>
            {routes?.map((route) => (
              <li
                key={`header-${route.text}`}
                className='text-200 font-bold uppercase leading-300 tracking-600 text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
              >
                <NavLink href={route.url}>{route.text}</NavLink>
              </li>
            ))}
          </ul>

          <Button variant={'primary'} modifier={'plain'}>
            <span className='sr-only'>Show Cart Menu</span>
            <icons.site.cart className='fill-current' />
          </Button>
        </section>
      </Container>
    </div>
  );
};
export { DesktopNavigation };
