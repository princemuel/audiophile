'use client';

import { formatPrice, shortName } from '@/helpers';
import {
  addCartItem,
  cartDispatch,
  cartState,
  getCartItemCount,
  updateItemCount,
} from '@/hooks';
import { useMemo } from 'react';
import { Button, Text } from '../atoms';

interface Props {
  product: IProduct;
}

export const ProductDetailCard = ({ product }: Props) => {
  const cartItems = cartState();
  const dispatch = cartDispatch();

  const cartItem = useMemo(() => {
    const {
      slug,
      name,
      price,
      categoryImage: { mobile },
    } = product;

    return {
      slug,
      name: shortName(name),
      price,
      image: mobile,
      quantity: 0,
    };
  }, [product]);

  const productKey = cartItem?.slug;

  const numberOfItems = useMemo(() => {
    return getCartItemCount(cartItems, productKey);
  }, [productKey, cartItems]);

  // console.log(computeSubTotal(cartItems));

  return (
    <article className='flex flex-col items-center gap-10 md:flex-row md:items-stretch lg:gap-20'>
      <figure className='flex-1 overflow-hidden rounded-brand'>
        <picture>
          <source
            media='(min-width: 64em)'
            srcSet={product?.categoryImage?.desktop}
          />
          <source
            media='(min-width: 48em)'
            srcSet={product?.categoryImage?.mobile}
          />
          <source
            media='(min-width: 36em)'
            srcSet={product?.categoryImage?.tablet}
          />
          <source srcSet={product?.categoryImage?.mobile} />
          <img
            src={product?.categoryImage?.mobile}
            alt={`Featured preview of ${product?.name}`}
            width={700}
            height={475}
            placeholder='blur'
            className='h-full w-full object-cover'
          />
        </picture>
      </figure>

      <div className='flex flex-col gap-6 sm:items-center sm:text-center md:flex-1 md:items-start md:gap-8 md:self-center md:text-left'>
        {product?.new && (
          <Text
            as='p'
            variant={'brand'}
            size={'x-small'}
            weight={'regular'}
            aria-live='polite'
          >
            New Product
          </Text>
        )}

        <Text
          as='h1'
          variant={'monochrome'}
          size={'2xl'}
          weight={'bold'}
          className='w-[min-content] whitespace-break-spaces'
        >
          {product?.name}
        </Text>

        <Text as='p'>{product?.description}</Text>

        <Text as='p' variant={'monochrome'} size={'small'} weight={'bold'}>
          {formatPrice(product?.price)}
        </Text>

        <div className='flex items-center gap-4'>
          <div className='flex items-center bg-zinc-50'>
            <Button
              type='button'
              variant={'accent'}
              className='px-4 py-2.5 hover:bg-zinc-200'
              onClick={() => {
                updateItemCount(dispatch, cartItems, cartItem, 'decrement');
              }}
              disabled={numberOfItems <= 0}
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
                suppressHydrationWarning
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
          </div>

          <Button
            type='button'
            variant={'primary'}
            size={'medium'}
            onClick={() => addCartItem(dispatch, cartItem)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
};
