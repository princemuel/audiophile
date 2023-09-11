import { formatPrice } from '@/helpers';
import { NextImage, Text } from '../atoms';
import { ProductControls } from './product-controls';

interface Props {
  item: CartItem;
  type: 'cart' | 'checkout';
}

export const CartProduct = ({ item, type }: Props) => {
  return (
    <>
      <figure className='h-full w-auto overflow-hidden rounded-brand'>
        <NextImage src={item?.image} alt={item?.slug} width={64} height={64} />
      </figure>

      <header className='mr-auto flex flex-col justify-around'>
        <Text as='p' weight={'bold'} uppercase>
          {item?.name}
        </Text>

        <Text as='p' variant={'primary/50'} weight={'bold'}>
          {formatPrice(item?.price)}
        </Text>
      </header>

      {type === 'checkout' && (
        <div>
          <Text as='p' variant={'primary/50'} weight={'bold'}>
            x{item?.quantity}
          </Text>
        </div>
      )}

      {type === 'cart' && <ProductControls item={item} component={'cart'} />}
    </>
  );
};
