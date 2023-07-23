'use client';

import styles from '@/assets/styles/layout.module.scss';
import { icons, links } from '@/common';
import { capitalize, cn, useCartStore, useModal } from '@/lib';
import Link from 'next/link';
import { Fragment } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import { Button, LogoIcon, NavLink, ResponsiveImage, Text } from '../atoms';
interface Props {}

const Header = (props: Props) => {
  const [locked, toggleLocked] = useToggle(false);

  const productQuantity = useCartStore().productQuantity;
  const toggleCartModal = useModal().toggle;

  useLockBodyScroll(locked);

  return (
    <header className={cn(styles['header__container'], '!bg-neutral-950')}>
      <div className={cn(styles.header, '!bg-neutral-950')}>
        <label
          id='trap'
          htmlFor='nav-toggle'
          onClick={toggleLocked}
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
            className={cn('px-12 py-16 lg:p-0', styles['primary-nav__list'])}
          >
            {links.routes.map((route) => {
              return (
                <Fragment key={`header-${route.id}`}>
                  <Link
                    href={route.url}
                    className='group relative block h-full rounded-brand bg-zinc-50 p-12 first-of-type:!hidden lg:!hidden'
                  >
                    <ResponsiveImage
                      src={route.image}
                      width={'140'}
                      height={'140'}
                      alt={capitalize(route.text)}
                      className='flex w-auto -translate-y-1/4 items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-1/3'
                    />

                    <div className='flex flex-col items-center gap-6'>
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
                </Fragment>
              );
            })}
          </div>
        </nav>
        <Button
          type='button'
          variant={'none'}
          size={'none'}
          text={'none'}
          className={cn('', styles.cart)}
          onClick={() => {
            toggleCartModal('cart-modal');
          }}
        >
          <icons.site.cart />
          {productQuantity > 0 && (
            <span className={cn('', styles['cart__count'])}>
              {productQuantity}
            </span>
          )}
          <span className='sr-only'>View Cart Items</span>
        </Button>{' '}
      </div>
    </header>
  );
};

export { Header };
