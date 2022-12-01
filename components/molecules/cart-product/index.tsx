import { Heading } from 'components/atoms';
import { formatPrice, shortName } from 'helpers';
import Image from 'next/future/image';
import { ProductCounter } from '../product-quantity';
import { Container, Header, ImageContainer, Price, Quantity } from './styles';

type Props = {
  name: string;
  price: number;
  imgSrc: string;
  alt: string;
  quantity?: number;
  hasControls: boolean;
};

const CartProduct = ({
  name,
  price,
  imgSrc,
  alt,
  quantity,
  hasControls,
}: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} alt={alt} width={64} height={64} />
      </ImageContainer>

      <Header>
        <Heading as='h4' className='fw-700 uppercase'>
          {shortName(name)}
        </Heading>
        <Price className='fw-700'>&#36; {formatPrice(price)}</Price>
      </Header>

      {hasControls ? (
        <ProductCounter inlineSize='1.4rem' blockSize='1rem' />
      ) : (
        <Quantity name='result' htmlFor='' className='fw-700'>
          x{quantity}
        </Quantity>
      )}
    </Container>
  );
};

export { CartProduct };
