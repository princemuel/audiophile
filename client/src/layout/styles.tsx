import styled from 'styled-components';

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

    @media (min-width: 48em) {
      left: 0;
      transform: translateX(0);
    }
  }

  .footer__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-bottom: 2em;
    text-align: center;

    @media (min-width: 48em) {
      align-items: start;
      text-align: left;
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

  .footer__bottom {
    display: grid;
    gap: 2em;
    margin-block-start: 2em;
    justify-items: center;
    text-align: center;

    @media (min-width: 48em) {
      justify-items: start;
      text-align: left;

      grid-template-areas: 'info info' 'copy social';
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer__info {
    line-height: 2.5rem;
    grid-area: info;
  }

  .footer__social {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  figure {
  }
`;
