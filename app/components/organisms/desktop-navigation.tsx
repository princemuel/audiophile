import { routes } from '@/common';
import { tw } from '@/helpers';
import { Container, LogoIcon, NavLink } from '../atoms';
import { CartButton } from '../molecules';

interface Props {
  className?: string;
}

const DesktopNavigation = ({ className }: Props) => {
  return (
    <div className={tw('', className)}>
      <Container>
        <section className='flex items-center py-9'>
          <LogoIcon className='text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500' />

          <ul className='mr-auto ml-auto flex flex-col items-center gap-5 md:flex-row md:gap-8'>
            {routes?.map((route) => (
              <li
                key={`header-${route.text}`}
                className='text-200 leading-300 font-bold tracking-600 text-white uppercase transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
              >
                <NavLink href={route.url}>{route.text}</NavLink>
              </li>
            ))}
          </ul>

          <CartButton />
        </section>
      </Container>
    </div>
  );
};
export { DesktopNavigation };
