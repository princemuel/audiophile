import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const Title = styled(Heading)`
  display: flex;
  flex-direction: column;
  font-size: 4rem;

  @media (min-width: 65em) {
    font-size: 5.6rem;
  }
`;

export const Description = styled(Text)``;

export const ImageContainer = styled.figure`
  align-self: center;
  justify-self: center;
  max-width: 20rem;

  @media ${devices?.tablet?.('min')} {
    align-self: end;
    justify-self: end;
    max-width: 38rem;
  }

  img {
    transform: translateY(0.7rem);
  }
`;

export const Body = styled.div``;

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  background-color: var(--clr-primary-100);
  background-image: url(/assets/home/desktop/pattern-circles.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.8rem;

  @media ${devices?.tablet?.('min')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    background-position: -8rem -3rem;
    background-size: 80%;
  }
`;
