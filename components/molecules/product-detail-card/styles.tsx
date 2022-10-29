import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const ProductItem = styled.article`
  display: grid;
  grid-template-areas:
    'img'
    'body';
  gap: 4rem;

  @media ${devices?.tablet?.('min')} {
    grid-template-columns: repeat(4, minmax(13rem, 1fr));
    grid-auto-rows: minmax(10rem, auto);
    grid-template-areas:
      'img img body body'
      'img img body body';
    gap: 5rem;
  }

  @media ${devices?.ipad?.('min')} {
    gap: 8rem;
  }
`;

export const ProductBody = styled.div`
  grid-area: body;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.5rem;

  @media ${devices?.smartphone?.('min')} {
    justify-content: center;
  }
`;

export const ProductImage = styled.figure`
  grid-area: img;

  img {
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;

export const ProductNew = styled(Text)``;
export const ProductName = styled(Heading)`
  letter-spacing: 1.43px;
`;

export const ProductDescription = styled(Text)`
  color: hsl(var(--clr-800) / 0.5);
`;
export const ProductPrice = styled(Text)``;
