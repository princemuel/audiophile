'use client';

import { routes } from '@/common';
import { tw } from '@/helpers';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { AlignJustify } from 'lucide-react';
import { Fragment, useRef } from 'react';
import { Button, Container, LogoIcon } from '../atoms';
import { CartButton, PageLink } from '../molecules';
interface Props {
  className?: string;
}

//TODO!: disable page scroll when nav menu is open

const MobileNavigation = ({ className }: Props) => {
  const popoverContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Popover className={tw('relative z-10', className)}>
      <Container>
        <div className='flex items-center gap-10 py-9'>
          <Button variant='primary' modifier='plain' asChild>
            <PopoverButton className='outline-none'>
              <span className='sr-only'>Toggle Navigation Menu</span>
              <AlignJustify className='text-current' />
            </PopoverButton>
          </Button>

          <LogoIcon className='mr-auto ml-auto text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500 md:ml-0' />

          <CartButton />
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
        <PopoverPanel
          className='absolute z-10 w-full bg-black/30'
          // ref={popoverContentRef}
          ref={(node) => {
            if (!popoverContentRef.current) {
              // @ts-expect-error
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
          {/* full-w-bg */}
          <Container className='bg-white pt-16 pb-10 text-white'>
            <div className='grid grid-cols-1 gap-11 sm:grid-cols-3 sm:gap-2 md:gap-7'>
              {routes.slice(1).map((route) => (
                <PopoverButton key={`mobile-${route.text}`} as={Fragment}>
                  <PageLink className='h-44' route={route} />
                </PopoverButton>
              ))}
            </div>
          </Container>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
export { MobileNavigation };
