'use client';

import { shortProductName } from '@/helpers';
import {
  addCartItem,
  cartDispatch,
  cartState,
  getCartItemCount,
  updateItemCount,
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

  const cartItem = React.useMemo(() => {
    const {
      slug,
      name,
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

  return (
    <Button
      type='button'
      variant={'primary'}
      size={'medium'}
      onClick={() => addCartItem(dispatch, cartItem)}
    >
      Add to cart
    </Button>
  );
}
