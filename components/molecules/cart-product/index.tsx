import Image from 'next/future/image';
import { ProductCounter } from '../product-quantity';

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
    <article>
      <figure>
        <Image src={imgSrc} alt={alt} width={100} height={100} />
      </figure>

      <div>
        <h4>{name}</h4>
        <p>${price}</p>
      </div>

      {hasControls ? <ProductCounter size='' /> : <div>{quantity}</div>}
    </article>
  );
};

export { CartProduct };
