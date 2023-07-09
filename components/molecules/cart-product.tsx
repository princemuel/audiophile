import { formatPrice, shortName } from '@/lib';
import { ProductControls, ResponsiveImage, Text } from '../atoms';

interface Props {
  item: CartItem;
  summary?: boolean;
}

export const CartProduct = ({ item, summary }: Props) => {
  console.log('price', item?.price);

  return (
    <>
      <ResponsiveImage
        src={item?.image}
        alt={item?.slug}
        width={64}
        height={64}
        className='w-auto overflow-hidden rounded-brand'
      />

      <header className='mr-auto flex flex-col justify-around'>
        <Text as='p' weight={'bold'} uppercase>
          {shortName(item?.name)}
        </Text>

        <Text as='p' variant={'primary/50'} weight={'bold'}>
          {formatPrice(item?.price)}
        </Text>
      </header>

      {summary ? (
        <div>
          <Text as='p' variant={'primary/50'} weight={'bold'}>
            x{item?.quantity}
          </Text>
        </div>
      ) : (
        <ProductControls product={item} cart={true} />
      )}
    </>
  );
};
