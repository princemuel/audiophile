'use client';

import { useCartStore } from '@/lib';
import { Button } from '../atoms';

interface Props {
  product: IProduct;
}

export const AddToCartBtn = ({ product }: Props) => {
  const dispatch = useCartStore().dispatch;
  return (
    <Button
      type='button'
      uppercase={true}
      onClick={() =>
        void dispatch({ type: 'cart/itemAdded', payload: product })
      }
    >
      Add to cart
    </Button>
  );
};
