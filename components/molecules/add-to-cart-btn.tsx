'use client';

import { useCartStore } from '@/lib';
import { Button } from '../atoms';

interface Props {
  item: CartItem;
}

export const AddToCartBtn = ({ item }: Props) => {
  const dispatch = useCartStore().dispatch;
  return (
    <Button
      type='button'
      uppercase={true}
      onClick={() => {
        dispatch({ type: 'ADD_CART_ITEM', payload: item });
      }}
    >
      Add to cart
    </Button>
  );
};
