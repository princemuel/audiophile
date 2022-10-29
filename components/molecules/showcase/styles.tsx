import { GlobalContainer, Text } from 'components/atoms';
import styled from 'styled-components';

interface ContainerProps {}

export const ShowcaseContainer = styled(GlobalContainer)<ContainerProps>``;

export const ShowcaseGrid = styled.div<ContainerProps>`
  background-image: url(/images/home/mobile/image-header.jpg);
  background-repeat: no-repeat;

  @media (min-width: 40em) {
    background-image: url(/images/home/tablet/image-header.jpg);
  }
  @media (min-width: 65em) {
    background-image: url(/images/home/desktop/image-hero.jpg);
  }
`;

export const AdvertText = styled(Text)`
  color: hsl(var(--clr-100) / 0.2);
`;
export const ShowcaseHeading = styled(Text)`
  color: hsl(var(--clr-100) / 0.2);

  display: flex;
  flex-direction: column;
  font-size: 4rem;

  @media (min-width: 65em) {
    font-size: 5.6rem;
  }
`;
