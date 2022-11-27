import { CartIcon, GlobalContainer, Logo, MenuButton } from 'components/atoms';
import { devices } from 'helpers';
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
  @media ${devices?.mobile?.('min')} {
    margin-inline-end: 3em;
  }
`;

export const HeaderLogo = styled(Logo)`
  margin-inline: auto;
  @media ${devices?.mobile?.('min')} {
    margin-inline: unset;
  }
  @media ${devices?.ipad?.('min')} {
    margin-inline-end: auto;
  }
`;
export const HeaderCartIcon = styled(CartIcon)`
  position: relative;
  margin-inline-start: auto;
`;

export const HeaderNavigation = styled.nav`
  margin-inline: auto;

  @media ${devices?.ipad?.('max')} {
    --text-color: var(--clr-neutral-900);

    position: relative;
    visibility: visible;
    width: 100%;
    top: 3rem;
    /* z-index: var(--chakra-zIndices-modal); */
    display: block;
    margin-inline: unset;
    padding-block: 2em;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: var(--clr-neutral-100);
    translate: 0;
    opacity: 1;
    transition: translate 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
