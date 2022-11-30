type Props = {
  name: string;
  price: number;
};

const PriceComponent = ({ name, price }: Props) => {
  return (
    <p>
      <span>{name}</span>
      <span>${price}</span>
    </p>
  );
};

export { PriceComponent };
