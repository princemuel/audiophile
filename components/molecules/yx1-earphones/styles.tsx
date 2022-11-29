import { Heading } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const Title = styled(Heading)``;

export const ImageContainer = styled.figure`
  padding-block: 14rem;
  background-image: url(/assets/home/mobile/image-earphones-yx1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media ${devices?.tablet('min')} {
    background-image: url(/assets/home/tablet/image-earphones-yx1.jpg);
  }
  @media ${devices?.ipad('min')} {
    background-image: url(/assets/home/desktop/image-earphones-yx1.jpg);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding-block: 8rem;
  padding-inline: 4rem;
`;

export const Container = styled.article`
  display: grid;
  gap: var(--gap, 3rem);

  @media ${devices?.smartphone('min')} {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }

  & > * {
    border-radius: 0.8rem;
  }
`;
