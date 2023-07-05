import { formatPrice, shortName } from '@/lib';
import { ProductControls, ResponsiveImage, Text } from '../atoms';

interface Props {
  name?: string;
  price?: number;
  image?: string;
  alt?: string;
  quantity?: number;
  summary?: boolean;
}

export const CartProduct = ({
  name,
  price,
  image,
  alt,
  quantity,
  summary,
}: Props) => {
  return (
    <>
      <ResponsiveImage
        src={image || '/assets/cart/image-xx59-headphones.jpg'}
        alt={alt || 'name'}
        width={64}
        height={64}
        className='w-auto overflow-hidden rounded-brand'
      />

      <header className='mr-auto flex flex-col justify-around'>
        <Text as='p' weight={'bold'} uppercase>
          {name ? shortName(name) : 'XX99 MK II'}
        </Text>

        <Text as='p' variant={'primary/50'} weight={'bold'}>
          &#36; {formatPrice(price)}
        </Text>
      </header>

      {summary ? (
        <div>
          <Text as='p' variant={'primary/50'} weight={'bold'}>
            x {quantity || 1}
          </Text>
        </div>
      ) : (
        <ProductControls />
      )}
    </>
  );
};
