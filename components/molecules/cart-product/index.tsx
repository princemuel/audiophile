type Props = {
  name: string;
  price: number;
  img: string;
  quantity?: number;
  hasControls: boolean;
};

const CartProduct = ({ name, price, img, quantity, hasControls }: Props) => {
  return (
    <article>
      <p>{name}</p>
      <span>${price}</span>
    </article>
  );
};

export { CartProduct };
