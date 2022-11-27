import { Heading, Text } from 'components/atoms';
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

export const ImageContainer = styled.figure``;

export const Body = styled.div``;

export const Container = styled.article``;
