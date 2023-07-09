'use client';

import { useCartStore } from '@/lib';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Button, Text } from '../atoms';

interface Props {
  product: IProduct;
  cart: boolean;
}

export function ProductControls({ product, cart }: Props) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const dispatch = useCartStore().dispatch;
  const router = useRouter();

  const productKey = `${product.name}-temp-store`;

  useEffect(() => {
    const item = localStorage.getItem(productKey);
    if (item) {
      const parsedItem: CartItem = JSON.parse(item);
      setNumberOfItems(Number(parsedItem.quantity));
    }
  }, [productKey]);

  const increment = useCallback(() => {
    setNumberOfItems((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setNumberOfItems((prev) => (prev > 1 ? prev - 1 : 1));
  }, []);

  const handleAmount = useCallback((action: 'increment' | 'decrement') => {
    if (action === 'decrement') {
      return setNumberOfItems((prev) => (prev > 0 ? prev - 1 : 0));
    }
    return setNumberOfItems((prev) => prev + 1);
  }, []);

  const handleAddToCart = useCallback(() => {
    dispatch({ type: 'cart/itemAdded', payload: product });
    router.push('/checkout');
  }, [dispatch, product, router]);

  return (
    <>
      <div className='flex items-center gap-4 bg-zinc-50'>
        <Button
          type='button'
          variant={'text-primary/25'}
          size={'sm'}
          className='hover:bg-zinc-200'
          onClick={decrement}
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
          onClick={increment}
        >
          &#43;
        </Button>
      </div>

      {cart === false && (
        <Button type='button' uppercase={true} onClick={handleAddToCart}>
          Add to cart
        </Button>
      )}
    </>
  );
}
