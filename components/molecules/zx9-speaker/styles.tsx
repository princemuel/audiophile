import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const Title = styled(Heading)`
  font-size: clamp(var(--fs-900), 5vw, var(--fs-xl));
`;

export const Description = styled(Text)`
  max-width: 35ch;

  /* @media ${devices.ipad('min')} {
    max-width: ;
  } */
`;

export const ImageContainer = styled.figure`
  place-self: center;
  max-width: 18rem;
  @media ${devices.ipad('min')} {
    max-width: none;
    transform: translateY(1.5rem);
  }

  img {
    border-radius: 0.8rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;

  @media ${devices.ipad('min')} {
    align-items: flex-start;
    margin-block: auto;
    text-align: left;
  }
`;

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-block: 5rem;
  padding-inline: 3rem;
  border-radius: 0.8rem;
  background-color: var(--clr-primary-100);
  background-image: url(/assets/home/desktop/pattern-circles.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -14rem;
  background-position-x: center;
  overflow-y: hidden;

  @media ${devices.ipad('min')} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8rem;
    background-position-y: -4rem;
    background-position-x: -38rem;
    padding-block: 10rem 0;
    padding-inline: 10rem;
  }
`;
