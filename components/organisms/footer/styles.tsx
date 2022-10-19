import { GlobalContainer, Text } from 'components/atoms';
import styled from 'styled-components';

export const FooterContainer = styled(GlobalContainer)`
  --text-color: hsl(var(--clr-100) / 0.5);
  --clr-shadow: var(--clr-neutral-800);

  color: var(--text-color);
  background-color: var(--clr-neutral-800);
  box-shadow: 0 0 0 100vmax var(--clr-shadow), 0 0 2rem var(--clr-shadow);
  clip-path: inset(0 -100vmax);
`;

export const FooterGrid = styled.section`
  padding-block: 4em;

  position: relative;
  color: hsl(var(--clr-300) / 0.7);

  &::before {
    content: '';

    top: 0;
    left: 50%;
    position: absolute;
    width: 10.1rem;
    height: 4px;
    background: var(--clr-primary-100);
    transform: translateX(-50%);

    @media (min-width: 45em) {
      left: 0;
      transform: translateX(0);
    }
  }

  .secondary-navigation {
    display: flex;
    flex-direction: column;
    gap: 3em;
    @media (min-width: 45em) {
      flex-direction: row;
    }
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  margin-bottom: 3em;
  text-align: center;
  @media (min-width: 45em) {
    align-items: start;
    text-align: left;
  }
  @media (min-width: 65em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterInfo = styled(Text)`
  max-width: 60ch;
  line-height: 2.5rem;
  @media (min-width: 45em) {
    grid-area: info;
  }
`;

export const FooterCopyright = styled(Text)`
  @media (min-width: 45em) {
    grid-area: copy;
  }
`;

export const FooterSocial = styled(Text)`
  display: flex;
  align-items: center;
  gap: 1em;
  @media (min-width: 45em) {
    justify-self: end;
  }
  @media (min-width: 65em) {
    align-self: end;
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  justify-items: center;
  gap: 3em;
  margin-block-start: 3em;
  text-align: center;
  @media (min-width: 45em) {
    justify-items: start;
    text-align: left;

    grid-template-areas: 'info info' 'copy social';
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 65em) {
    grid-template-areas: 'info social' 'copy copy';
    grid-template-columns: repeat(2, 1fr);
  }
`;
