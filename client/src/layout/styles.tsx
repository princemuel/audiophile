import styled from 'styled-components';

export const FooterGrid = styled.section`
  padding-block: 4em;

  position: relative;
  display: grid;
  justify-items: center;
  gap: 3em;
  color: hsl(var(--clr-300) / 0.7);
  text-align: center;

  @media (min-width: 48em) {
    justify-items: left;
    text-align: initial;
  }

  &::before {
    content: '';

    top: 0;
    left: 50%;
    position: absolute;
    width: 10.1rem;
    height: 4px;
    background: var(--clr-primary-100);
    transform: translateX(-50%);

    @media (min-width: 48em) {
      left: 0;
      transform: translateX(0);
    }
  }

  .secondary-navigation {
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: 48em) {
      flex-direction: row;
    }
  }

  .footer__info {
    line-height: 2.5rem;
  }

  .footer__social {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  figure {
  }
`;
