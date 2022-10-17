import { CartIcon, Logo, MenuButton } from 'components/atoms';
import { GlobalContainer } from 'components/templates';
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
    bottom: 0;
    margin-inline: unset;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
