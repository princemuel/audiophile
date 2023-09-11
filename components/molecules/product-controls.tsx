'use client';

import { safeNum, storage } from '@/helpers';
import { useCartStore } from '@/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Text } from '../atoms';

interface Props {
  item: CartItem;
  component: 'product' | 'cart';
}

export const ProductControls = ({ item, component }: Props) => {
  const cartDispatch = useCartStore().dispatch;

  const memoizedItem = useMemo(() => item, [item]);
  const productKey = memoizedItem?.slug;

  const [numberOfItems, setNumberOfItems] = useState(() => {
    const parsedItem = storage.getItem(productKey, memoizedItem);
    return safeNum(parsedItem?.quantity, 1);
  });

  useEffect(() => {
    storage.setItem(productKey, { ...memoizedItem, quantity: numberOfItems });
  }, [memoizedItem, numberOfItems, productKey]);

  useEffect(() => {
    console.log(numberOfItems);
  }, [numberOfItems]);

  const handleAmount = useCallback((action: 'increment' | 'decrement') => {
    if (action === 'decrement')
      setNumberOfItems((prev) => (prev > 1 ? prev - 1 : 1));
    else setNumberOfItems((prev) => prev + 1);
  }, []);

  return (
    <>
      <div className='flex items-center gap-4 bg-zinc-50'>
        <Button
          type='button'
          // variant={'text-primary/25'}
          size={'slim'}
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
          // variant={'text-primary/25'}
          size={'slim'}
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
          onClick={() => void handleAddToCart(memoizedItem)}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
