'use client';

import { safeNum, storage, useCartStore } from '@/lib';
import { useCallback, useEffect, useState } from 'react';
import { Button, Text } from '../atoms';

interface Props {
  item: CartItem;
  component: 'product' | 'cart';
}

export const ProductControls = ({ item, component }: Props) => {
  const cartDispatch = useCartStore().dispatch;

  const productKey = item?.slug;

  const [numberOfItems, setNumberOfItems] = useState(() => {
    const parsedItem = storage.getItem(productKey, item);
    return safeNum(parsedItem?.quantity, 1);
  });

  useEffect(() => {
    console.log(numberOfItems);
  }, [numberOfItems]);

  useEffect(() => {
    cartDispatch({
      type: 'UPDATE_CART_ITEM_COUNT',
      payload: { ...item, quantity: numberOfItems },
    });
    storage.setItem(productKey, { ...item, quantity: numberOfItems });
  }, [cartDispatch, item, numberOfItems, productKey]);

  const handleAmount = useCallback((action: 'increment' | 'decrement') => {
    if (action === 'decrement') {
      setNumberOfItems((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setNumberOfItems((prev) => prev + 1);
    }
  }, []);

  const handleAddToCart = useCallback(
    (value: CartItem) => {
      const cartItem = {
        ...value,
        quantity: numberOfItems,
      } satisfies CartItem;
      cartDispatch({ type: 'ADD_CART_ITEM', payload: cartItem });
    },
    [cartDispatch, numberOfItems]
  );

  return (
    <>
      <div className='flex items-center gap-4 bg-zinc-50'>
        <Button
          type='button'
          variant={'text-primary/25'}
          size={'sm'}
          className='hover:bg-zinc-200'
          onClick={() => void handleAmount('decrement')}
        >
          &#x2212;
        </Button>

        <Text as='output' variant={'primary'} size={'xs'} weight={'bold'}>
          {numberOfItems}
        </Text>

        <Button
          type='button'
          variant={'text-primary/25'}
          size={'sm'}
          className='hover:bg-zinc-200'
          onClick={() => void handleAmount('increment')}
        >
          &#43;
        </Button>
      </div>

      {component === 'product' && (
        <Button
          type='button'
          uppercase={true}
          onClick={() => void handleAddToCart(item)}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
