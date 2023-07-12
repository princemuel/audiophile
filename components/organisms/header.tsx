import styles from '@/assets/styles/layout.module.scss';
import { icons, links } from '@/common';
import { capitalize, cn } from '@/lib';
import Link from 'next/link';
import { Button, LogoIcon, NavLink, ResponsiveImage, Text } from '../atoms';
interface Props {}

const Header = (props: Props) => {
  return (
    <header className={cn(styles['header__container'], '!bg-neutral-950')}>
      <div className={cn(styles.header, '!bg-neutral-950')}>
        <label
          htmlFor='nav-toggle'
          className={cn('', styles['primary-nav__toggle-label'])}
        >
          <span></span>
        </label>
        <LogoIcon
          className={cn(
            'text-white transition-all delay-0 duration-300  ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500',
            styles.logo
          )}
        />
        <input
          type='checkbox'
          name='nav-toggle'
          id='nav-toggle'
          className={cn('', styles['primary-nav__toggle'])}
          aria-controls='primary-nav'
        />
        <nav
          id={'primary-nav'}
          aria-label='Primary Navigation'
          className={cn('', styles['primary-nav'])}
        >
          <div
            className={cn(
              'flex flex-col gap-20 px-6 py-28',
              styles['primary-nav__list']
            )}
          >
            {links.routes.map((route) => {
              return (
                <>
                  <Link
                    key={route.id}
                    href={route.url}
                    className='group relative block h-full rounded-brand bg-zinc-50 pb-8 first-of-type:hidden lg:hidden'
                  >
                    <ResponsiveImage
                      src={route.image}
                      width={'200'}
                      height={'200'}
                      alt={capitalize(route.text)}
                      className='flex w-auto -translate-y-1/4 items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-1/3'
                    />

                    <div className='-mt-28 flex flex-col items-center gap-6'>
                      <Text
                        as='h4'
                        variant={'primary'}
                        size={'sm'}
                        weight={'bold'}
                      >
                        {route.text}
                      </Text>

                      <Button
                        type='button'
                        variant={'text-primary/50'}
                        size={'none'}
                      >
                        <span>Shop</span>
                        <icons.chevron.right />
                      </Button>
                    </div>
                  </Link>

                  <p
                    key={route.id}
                    className={cn(
                      'hidden lg:block',
                      'text-200 uppercase leading-300 tracking-100 text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
                    )}
                  >
                    <NavLink href={route.url}>{route.text}</NavLink>
                  </p>
                </>
              );
            })}
            <li className='max-lg:hidden'>
              <NavLink href={'/'}>Home</NavLink>
            </li>
            <li>
              {/*  @ts-expect-error */}
              <NavLink href={'/headphones'}>Headphones</NavLink>
            </li>
            <li>
              {/*  @ts-expect-error */}
              <NavLink href={'/speakers'}>speakers</NavLink>
            </li>
            <li>
              {/*  @ts-expect-error */}
              <NavLink href={'/earphones'}>earphones</NavLink>
            </li>
          </div>
        </nav>
        <Button
          type='button'
          variant={'none'}
          size={'none'}
          text={'none'}
          className={cn('', styles.cart)}
        >
          <icons.site.cart />
          <span className='sr-only'>View Cart Items</span>
        </Button>{' '}
      </div>
    </header>
  );
};

export { Header };
