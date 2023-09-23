'use client';

import { icons } from '@/common';
import { cn, shortProductName } from '@/helpers';
import {
  addCartItem,
  cartDispatch,
  cartState,
  getCartItemCount,
  updateItemCount,
  useCartModal,
} from '@/hooks';
import * as React from 'react';
import { Button, ClientOnly, Text } from '../atoms';

interface Props {
  product: IProduct;
}

export function ProductCardControls({ product }: Props) {
  const productKey = product?.slug;

  const cartItems = cartState();
  const dispatch = cartDispatch();

  const cartItem = React.useMemo(() => {
    return {
      slug: product?.slug,
      name: shortProductName(product),
      price: product?.price,
      image: product?.categoryImage?.mobile,
      quantity: 0,
    };
  }, [product]);

  const numberOfItems = React.useMemo(() => {
    return getCartItemCount(cartItems, productKey);
  }, [productKey, cartItems]);

  return (
    <ClientOnly>
      <Button
        type='button'
        variant={'accent'}
        className='px-4 py-2.5 hover:bg-zinc-200'
        disabled={numberOfItems <= 0}
        onClick={() => {
          updateItemCount(dispatch, cartItems, cartItem, 'decrement');
        }}
      >
        &#x2212;
      </Button>

      <div className='px-2 py-2.5'>
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
        className='px-4 py-2.5 hover:bg-zinc-200'
        onClick={() => {
          updateItemCount(dispatch, cartItems, cartItem, 'increment');
        }}
      >
        &#43;
      </Button>
    </ClientOnly>
  );
}

export function AddToCartButton({ product }: Props) {
  const dispatch = cartDispatch();
  const cartModal = useCartModal();

  const [isPending, startTransition] = React.useTransition();

  const cartItem = React.useMemo(() => {
    const {
      slug,
      price,
      categoryImage: { mobile },
    } = product;

    return {
      slug,
      name: shortProductName(product),
      price,
      image: mobile,
      quantity: 0,
    };
  }, [product]);

  const handleAddToCart = React.useCallback(
    (item: CartItem) => {
      addCartItem(dispatch, item);

      setTimeout(() => {
        startTransition(() => {
          cartModal.show();
        });
      }, 1000);
    },
    [cartModal, dispatch]
  );

  return (
    <Button
      type='button'
      variant={'primary'}
      size={'medium'}
      onClick={() => handleAddToCart(cartItem)}
      className={cn(isPending ? 'bg-neutral-700' : '')}
    >
      Add to cart
    </Button>
  );
}

interface CartButtonProps {
  modal: React.ReactNode;
}

export function CartButton() {
  const cartModal = useCartModal();
  const cartItems = cartState();

  return (
    <Button variant='primary' modifier='plain' onClick={cartModal.toggle}>
      <span className='sr-only'>Show Cart Menu</span>
      <icons.site.cart className='fill-current' />
      <ClientOnly>
        <span className='absolute -right-1 -top-1 inline-flex h-3 w-3 items-center justify-center gap-1 rounded-full border border-white bg-brand-500 text-[8px] group-hover:bg-white group-hover:text-black group-focus:text-black'>
          {(cartItems || []).length}
        </span>
      </ClientOnly>
    </Button>
  );
}
