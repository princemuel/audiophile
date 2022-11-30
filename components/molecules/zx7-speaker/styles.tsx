import { ButtonSecondary, Heading } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const Title = styled(Heading)``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

export const Container = styled.article`
  padding-block: 16rem;
  padding-inline: 4rem;
  border-radius: var(--b-radius);
  background-image: url(/assets/home/mobile/image-speaker-zx7.jpg);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  background-size: cover;

  @media ${devices.tablet('min')} {
    background-image: url(/assets/home/tablet/image-speaker-zx7.jpg);
  }

  @media ${devices.ipad('min')} {
    padding-block: 10rem;
    padding-inline: 8rem;
    background-image: url(/assets/home/desktop/image-speaker-zx7.jpg);
  }

  & > ${ButtonSecondary} {
  }
`;
