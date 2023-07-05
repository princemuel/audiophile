import { formatPrice, shortName } from '@/lib';
import Image from 'next/image';
import { ResponsiveImage, Text } from '../atoms';

interface Props {
  name: string;
  price: number;
  imgSrc: string;
  alt: string;
  quantity?: number;
  hasControls: boolean;
}

const CartProduct = ({
  name,
  price,
  imgSrc,
  alt,
  quantity,
  hasControls,
}: Props) => {
  return (
    <div>
      <ResponsiveImage src={''} alt={''}>
        <Image src={imgSrc} alt={alt} width={64} height={64} />
      </ResponsiveImage>

      <header>
        <Text as='h4' className='fw-700 uppercase'>
          {shortName(name)}
        </Text>
        <Text as='p'>&#36; {formatPrice(price)}</Text>
      </header>

      {hasControls ? (
        <Text as='p'>&#36; {formatPrice(price)}</Text>
      ) : (
        <Text as='p'>x {quantity}</Text>
      )}
    </div>
  );
};

export { CartProduct };
