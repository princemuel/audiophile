'use client';

import { icons, routes } from '@/common';
import { cn } from '@/helpers';
import { Popover, Transition } from '@headlessui/react';
import { AlignJustify } from 'lucide-react';
import NextLink from 'next/link';
import { Fragment, useRef } from 'react';
import { Button, Container, LogoIcon } from '../atoms';
import { PageLink } from '../molecules/page-link';
interface Props {
  className?: string;
}

//TODO!: disable page scroll when nav menu is open

const MobileNavigation = ({ className }: Props) => {
  const popoverContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Popover className={cn('relative z-10', className)}>
      <Container>
        <div className='flex items-center gap-10 py-9'>
          <Button variant={'primary'} modifier={'plain'} asChild>
            <Popover.Button className='outline-none'>
              <span className='sr-only'>Toggle Navigation Menu</span>
              <AlignJustify className='text-current' />
            </Popover.Button>
          </Button>

          <LogoIcon className='ml-auto mr-auto text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500 md:ml-0' />

          <Button variant={'primary'} modifier={'plain'} asChild>
            <NextLink href='/checkout?name=CartMenu'>
              <span className='sr-only'>Show Cart Menu</span>
              <icons.site.cart className='fill-current' />
            </NextLink>
          </Button>
        </div>
      </Container>

      <Transition
        enter='transition ease-in-out duration-300 transform'
        enterFrom='-translate-x-full opacity-0'
        enterTo='translate-x-0 opacity-100'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0 opacity-100'
        leaveTo='-translate-x-full opacity-0'
      >
        <Popover.Panel
          className='absolute z-10 w-full bg-black/30'
          // ref={popoverContentRef}
          ref={(node) => {
            if (!popoverContentRef.current) {
              popoverContentRef.current = node;
              // @ts-expect-error
              popoverContentRef.current.style.overflowY = 'scroll';
              document.body.style.overflow = 'hidden'; // D
            } else {
              popoverContentRef.current.style.overflowY = 'hidden';
              document.body.style.overflow = '';
              popoverContentRef.current = null;
            }
          }}
        >
          <Container className='bg-white pb-10 pt-16 text-white full-w-bg'>
            <div className='grid grid-cols-1 gap-11 sm:grid-cols-3 sm:gap-2 md:gap-7'>
              {routes.slice(1).map((route) => (
                <Popover.Button key={`mobile-${route.text}`} as={Fragment}>
                  <PageLink className='h-44' route={route} />
                </Popover.Button>
              ))}
            </div>
          </Container>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export { MobileNavigation };
