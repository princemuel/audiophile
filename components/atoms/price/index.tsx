import { formatPrice } from 'helpers';
import styled from 'styled-components';

type Props = {
  name: string;
  price: number;
  isGrandTotal?: boolean;
};

const PriceComponent = ({ name, price, isGrandTotal }: Props) => {
  return (
    <PriceContainer>
      <Title className='uppercase'>{name}</Title>
      <Price data-grand={isGrandTotal} className='fw-700 uppercase'>
        &#36; {formatPrice(price)}
      </Price>
    </PriceContainer>
  );
};

export { PriceComponent };

const PriceContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.span`
  color: hsl(var(--clr-800) / 0.5);
`;

type PriceProps = {
  'data-grand'?: boolean;
};
const Price = styled.span<PriceProps>`
  color: ${(props) => props['data-grand'] && 'var(--clr-primary-100)'};
`;
