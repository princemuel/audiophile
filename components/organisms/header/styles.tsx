import { GlobalContainer } from 'components/templates';
import styled from 'styled-components';

export const HeaderContainer = styled(GlobalContainer)`
  --text-color: var(--clr-neutral-100);
  --clr-shadow: var(--clr-neutral-700);

  position: sticky;
  top: 0;
  color: var(--text-color);
  background-color: var(--clr-neutral-800);
  box-shadow: 0 0 0 100vmax var(--clr-shadow), 0 0 2rem var(--clr-shadow);
  clip-path: inset(0 -100vmax);
`;

export const HeaderStack = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderNavigation = styled.nav``;
