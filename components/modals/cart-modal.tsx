'use client';

import {
  calculateTotal,
  cn,
  formatAmount,
  getCartItemCount,
  hasValues,
  vatFee,
} from '@/helpers';
import {
  cartDispatch,
  cartState,
  clearCart,
  updateItemCount,
  useCartModal,
} from '@/hooks';
import { Dialog, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { Fragment, useMemo } from 'react';
import { Button, Container, NextImage, Text } from '../atoms';

export function CartModal() {
  const cartModal = useCartModal();

  const cartItems = cartState();
  const dispatch = cartDispatch();

  const subTotal = useMemo(() => calculateTotal(cartItems), [cartItems]);

  return (
    <Transition show={cartModal.isVisible} as={Fragment}>
      <Dialog as='div' className={cn('relative z-10')} onClose={cartModal.hide}>
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
                    <div className='mx-auto flex flex-col gap-6 rounded-lg bg-white p-7 pt-10 shadow-xl sm:mx-0 sm:ml-auto sm:max-w-sm'>
                      <div className='flex items-center justify-between'>
                        <Dialog.Title className='text-500 font-bold leading-200 tracking-300'>
                          <span>Cart</span>&nbsp;
                          <span>&#40;{cartItems.length}&#41;</span>
                        </Dialog.Title>

                        <Button
                          type='button'
                          variant='accent'
                          weight='medium'
                          uppercase={false}
                          className='underline'
                          onClick={() => clearCart(dispatch)}
                        >
                          Remove all
                        </Button>
                      </div>

                      <ul className='flex flex-col gap-4'>
                        {hasValues(cartItems) ? (
                          cartItems.map((item) => {
                            const numberOfItems = getCartItemCount(
                              cartItems,
                              item.slug
                            );

                            return (
                              <li
                                key={`cart-item-${item?.slug}`}
                                className='flex items-center gap-4'
                              >
                                <figure className='h-full w-auto overflow-hidden rounded-lg'>
                                  <NextImage
                                    src={item?.image}
                                    alt={item?.slug}
                                    width={64}
                                    height={64}
                                  />
                                </figure>

                                <header className='mr-auto flex flex-col justify-around'>
                                  <Text
                                    as='p'
                                    variant={'monochrome'}
                                    size={'base'}
                                    weight={'bold'}
                                    className='uppercase'
                                  >
                                    {item?.name}
                                  </Text>

                                  <Text
                                    as='p'
                                    size={'base'}
                                    weight={'bold'}
                                    className='text-300'
                                  >
                                    {formatAmount(item?.price)}
                                  </Text>
                                </header>

                                <div className='flex items-center bg-zinc-50'>
                                  <Button
                                    type='button'
                                    variant={'accent'}
                                    className='px-3 py-1 hover:bg-zinc-200'
                                    disabled={numberOfItems <= 0}
                                    onClick={() => {
                                      updateItemCount(
                                        dispatch,
                                        cartItems,
                                        item,
                                        'decrement'
                                      );
                                    }}
                                  >
                                    &#x2212;
                                  </Button>

                                  <div className='px-3 py-1'>
                                    <Text
                                      as='p'
                                      variant={'monochrome'}
                                      size={'xx-small'}
                                      weight={'bold'}
                                      className=''
                                    >
                                      {numberOfItems}
                                    </Text>
                                  </div>

                                  <Button
                                    type='button'
                                    variant={'accent'}
                                    className='px-3 py-1 hover:bg-zinc-200'
                                    onClick={() => {
                                      updateItemCount(
                                        dispatch,
                                        cartItems,
                                        item,
                                        'increment'
                                      );
                                    }}
                                  >
                                    &#43;
                                  </Button>
                                </div>
                              </li>
                            );
                          })
                        ) : (
                          <li className='text-center'>
                            <Text as='p' size='xx-small'>
                              No items in cart
                            </Text>
                          </li>
                        )}
                      </ul>

                      <div className='flex items-center justify-between'>
                        <Text as='h5' size={'base'} className='uppercase'>
                          Total
                        </Text>

                        <Text
                          as='p'
                          variant={'monochrome'}
                          size={'small'}
                          weight={'bold'}
                        >
                          {formatAmount(vatFee(subTotal))}
                        </Text>
                      </div>

                      <Button
                        type='button'
                        variant='primary'
                        size='medium'
                        className='justify-center'
                        onClick={cartModal.hide}
                        asChild
                      >
                        <NextLink href={'/checkout'}>Checkout</NextLink>
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
