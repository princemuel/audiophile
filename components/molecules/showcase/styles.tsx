import { GlobalContainer, Text } from 'components/atoms';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isHome: boolean;
}

export const ShowcaseContainer = styled(GlobalContainer)<ContainerProps>`
  --bg-color: ${({ isHome }) =>
    isHome ? `var(--clr-neutral-800)` : `var(--clr-neutral-900)`};

  ${({ isHome }) =>
    isHome &&
    css`
      position: relative;
      z-index: 1;
      overflow: hidden;
      min-height: 80vh;
    `};

  padding-block: 10rem;
  margin-block-end: 15rem;
  background-color: var(--bg-color);
  box-shadow: 0 0 0 100vmax var(--bg-color), 0 0 2rem var(--bg-color);
  clip-path: inset(0 -100vmax);
`;

export const ShowcaseGrid = styled.div<ContainerProps>`
  ${({ isHome }) =>
    isHome &&
    css`
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        z-index: -1;
        display: block;
        width: 100%;
        aspect-ratio: 16/9;
        background-image: url(/images/home/mobile/image-header.jpg);
        background-repeat: no-repeat;

        @media (min-width: 40em) {
          background-image: url(/images/home/tablet/image-header.jpg);
        }
        @media (min-width: 65em) {
          background-image: url(/images/home/desktop/image-hero.jpg);
        }
      }
    `};
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
