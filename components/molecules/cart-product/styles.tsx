import { Text } from 'components/atoms';
import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > :last-child {
    margin-inline-start: auto;
  }
`;

export const ImageContainer = styled.figure`
  img {
    border-radius: var(--b-radius);
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
`;

export const Price = styled(Text)`
  color: hsl(var(--clr-800) / 0.5);
`;

export const Quantity = styled.output`
  color: hsl(var(--clr-800) / 0.5);
`;
