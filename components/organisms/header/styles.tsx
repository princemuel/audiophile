import { CartIcon, GlobalContainer, Logo, MenuButton } from 'components/atoms';
import styled from 'styled-components';

interface ContainerProps {
  isHome: boolean;
}

export const HeaderContainer = styled(GlobalContainer)<ContainerProps>`
  --text-color: var(--clr-neutral-100);
  --bg-color: ${({ isHome }) =>
    isHome ? `var(--clr-neutral-800)` : `var(--clr-neutral-900)`};

  position: sticky;
  top: 0;
  z-index: 900; //TODO: Overlay: 1000
  padding-block: 2em;
  border-block-end: 1px solid hsl(var(--clr-100) / 0.2);
  color: var(--text-color);
  background-color: var(--bg-color);
  box-shadow: 0 0 0 100vmax var(--bg-color), 0 0 2rem var(--bg-color);
  clip-path: inset(0 -100vmax);
`;

export const HeaderStack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderNavButton = styled(MenuButton)`
  margin-inline-end: auto;
  @media (min-width: 36em) {
    margin-inline-end: 3em;
  }
`;

export const HeaderLogo = styled(Logo)`
  margin-inline: auto;
  @media (min-width: 36em) {
    margin-inline: unset;
  }
  @media (min-width: 65em) {
    margin-inline-end: auto;
  }
`;
export const HeaderCartIcon = styled(CartIcon)`
  margin-inline-start: auto;
`;

export const HeaderNavigation = styled.nav`
  margin-inline: auto;

  @media (max-width: 65em) {
    position: absolute;
    width: 100%;
    top: 5.625rem;
    background: var(--chakra-colors-white);
    padding-inline: 1.5rem;
    padding-bottom: 2rem;
    visibility: visible;
    opacity: 1;
    transform: translate(0px);
    transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;
    z-index: var(--chakra-zIndices-modal);
    display: block;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-inline: unset;
    background-color: hsl(0 0% 60%);
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
