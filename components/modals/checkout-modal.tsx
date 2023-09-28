'use client';

import { icons } from '@/common';
import { approximate, cn, formatPrice, hasValues } from '@/helpers';
import { cartState, computeTotalAmount, useCheckoutModal } from '@/hooks';
import { Dialog, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { Button, ClientOnly, Container, NextImage, Text } from '../atoms';

const initialDisplayed = 1;

export function CheckoutModal() {
  const checkoutModal = useCheckoutModal();
  const items = cartState();

  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAll = useCallback(() => {
    setShowAllItems((previous) => !previous);
  }, []);

  const cartItems = useMemo(
    () => (showAllItems ? items : items.slice(0, initialDisplayed)),
    [items, showAllItems]
  );

  const remainingItemsCount = items.length - initialDisplayed;

  return (
    <Transition as={Fragment} show={checkoutModal.isVisible}>
      <Dialog
        as='div'
        className={cn('relative z-10')}
        onClose={checkoutModal.hide}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/40' aria-hidden='true' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-hidden'>
          <div className='flex h-full py-8 backdrop-blur-sm'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                as='div'
                className='relative w-full transform text-black transition-all'
              >
                <section className='mt-24'>
                  <Container>
                    <div className='mx-auto flex flex-col gap-8 rounded-lg bg-white p-6 pt-8 shadow-xl sm:max-w-lg sm:p-8 sm:pt-10'>
                      <header className='flex flex-col gap-6 md:gap-8'>
                        <icons.form.confirm className='' />

                        <Dialog.Title as={Fragment}>
                          <Text
                            as='h2'
                            variant={'monochrome'}
                            size={'xl'}
                            weight={'bold'}
                          >
                            Thank you <br />
                            for your order
                          </Text>
                        </Dialog.Title>

                        <Dialog.Description as={Text} className=''>
                          You will receive an email confirmation shortly.
                        </Dialog.Description>
                      </header>

                      <div className='flex w-full flex-col overflow-hidden rounded-lg md:flex-row'>
                        <div className='flex flex-1 flex-col gap-4 bg-zinc-50 p-6'>
                          <ul className='flex flex-col gap-2 border-b border-black/[0.08] py-2'>
                            {hasValues(cartItems) ? (
                              cartItems.map((item) => (
                                <li
                                  key={`checkout-modal-${item.slug}`}
                                  className='flex items-center gap-4'
                                >
                                  <figure className='h-full w-auto overflow-hidden rounded-lg'>
                                    <NextImage
                                      src={item?.image}
                                      alt={item?.slug}
                                      width={48}
                                      height={48}
                                    />
                                  </figure>

                                  <header className='mr-auto flex flex-col justify-around'>
                                    <Text
                                      as='p'
                                      variant={'monochrome'}
                                      weight={'bold'}
                                      className='uppercase'
                                    >
                                      {item?.name}
                                    </Text>

                                    <Text
                                      as='p'
                                      weight={'bold'}
                                      className='text-300'
                                    >
                                      {formatPrice(item?.price)}
                                    </Text>
                                  </header>

                                  <div>
                                    <Text
                                      as='p'
                                      weight={'bold'}
                                      className='lowercase'
                                    >
                                      x{item?.quantity}
                                    </Text>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <li className='flex items-center gap-2'>
                                No items to show
                              </li>
                            )}
                          </ul>

                          {items.length > initialDisplayed && (
                            <Button
                              modifier={'plain'}
                              uppercase={false}
                              className='w-full justify-center text-xs font-bold tracking-[-0.214px] text-black/50'
                              onClick={toggleShowAll}
                            >
                              {showAllItems
                                ? 'View Less'
                                : `and ${remainingItemsCount} other item(s)`}
                            </Button>
                          )}
                        </div>

                        <div className='grid items-end justify-start bg-black p-8'>
                          <div className='flex flex-col gap-2'>
                            <Text
                              as='h5'
                              modifier={'white/50'}
                              className='uppercase'
                            >
                              Grand Total
                            </Text>
                            <ClientOnly>
                              <Text
                                as='p'
                                modifier={'inverted'}
                                size={'small'}
                                weight={'bold'}
                              >
                                {formatPrice(
                                  approximate(computeTotalAmount(cartItems))
                                )}
                              </Text>
                            </ClientOnly>{' '}
                          </div>
                        </div>
                      </div>

                      <Button
                        type='button'
                        variant='primary'
                        size='medium'
                        className='justify-center'
                        onClick={checkoutModal.hide}
                        asChild
                      >
                        <NextLink href={'/'}>Back to home</NextLink>
                      </Button>
                    </div>
                  </Container>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
