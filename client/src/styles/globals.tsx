import { createGlobalStyle, css } from 'styled-components';

const basicStyles = css`
  /* -------------------------------- */
  /* BASE                             */
  /* -------------------------------- */

  /*!Theme Name:
Theme URI: https://karaokecommerce.netlify.app/
Repository: https://github.com/princemuel/fm-audiophile-ecommerce
Description: An Audiophile E-Conmmerce Project from Frontend Mentor Challeges
Author's Name: Samuel Chukwuzube
Author's Moniker: princemuel
Version: 01
*/

  /* ////////////////////////////////////////////
// BASE CONFIGURATION
*/
  :root {
    /* colors */
    --clr-700: 0 0% 0%;
    --clr-600: 0 0% 6%;
    --clr-500: 22 65% 57%;
    --clr-400: 21 94% 75%;
    --clr-300: 0 0% 95%;
    --clr-200: 0 0% 98%;
    --clr-100: 0 0% 100%;

    /* font-sizes */
    --fs-xl: 5.6rem;
    --fs-900: 4rem;
    --fs-800: 3.2rem;
    --fs-700: 2.8rem;
    --fs-600: 2.4rem;
    --fs-500: 1.8rem;
    --fs-400: 1.5rem;
    --fs-300: 1.4rem;
    --fs-200: 1.3rem;
    --fs-100: 1rem;

    --fs-body: var(--fs-400);
    --fs-primary-heading: var(--fs-800);
    --fs-secondary-heading: var(--fs-700);
    --fs-button: var(--fs-200);

    --fw-400: 400;
    --fw-500: 500;
    --fw-700: 700;

    --fw-700: 700;
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;
    --fw-300: 300;

    --fw-regular: var(--fw-400);
    --fw-semi-bold: var(--fw-500);
    --fw-bold: var(--fw-700);

    --ff-primary: 'Manrope', sans-serif;
    --ff-body: var(--ff-primary);
    --ff-heading: var(--ff-primary);

    --b-radius: 0;

    --size-100: 0.4rem;
    --size-200: 0.8rem;
    --size-300: 1.2rem;
    --size-400: 1.6rem;
    --size-500: 2.4rem;
    --size-600: 3.2rem;
    --size-700: 4.8rem;
    --size-800: 6.4rem;
    --size-900: 8rem;
  }

  /* Set core root defaults */
  html {
    box-sizing: border-box;
    font-size: 50%;
    text-rendering: optimizeSpeed;

    @media (min-width: 45em) {
      font-size: 56.25%;
    }
    @media (min-width: 75em) {
      font-size: 62.5%;
    }
    @media (min-width: 112.5em) {
      font-size: 75%;
    }

    &,
    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }

  /* Set core body defaults */
  body {
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
  }

  /*********** SCROLLBARS: DISABLED ************/
  *,
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  /* Make images easier to work with */
  /* :not([hidden]) selector fixes display issues */
  img,
  picture,
  svg {
    height: auto;
    display: block;
    max-width: 100%;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* TYPOGRAPHY */
  body {
    /* Levels of white */
    --clr-neutral-100: hsl(var(--clr-100));
    --clr-neutral-200: hsl(var(--clr-200));
    --clr-neutral-300: hsl(var(--clr-300));

    /* Levels of brown */
    --clr-primary-100: hsl(var(--clr-500));
    --clr-primary-200: hsl(var(--clr-400));

    /* Levels of dark */
    --clr-accent-100: hsl(var(--clr-700));
    --clr-accent-200: hsl(var(--clr-600));

    color: var(--clr-accent-100);
    background: var(--clr-neutral-100);
    font-family: var(--ff-body);
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-body);
  }

  .fs-xl {
    font-size: var(--fs-xl);
  }
  .fs-900 {
    font-size: var(--fs-900);
  }
  .fs-800 {
    font-size: var(--fs-800);
  }
  .fs-700 {
    font-size: var(--fs-700);
  }
  .fs-600 {
    font-size: var(--fs-600);
  }
  .fs-500 {
    font-size: var(--fs-500);
  }
  .fs-400 {
    font-size: var(--fs-400);
  }
  .fs-300 {
    font-size: var(--fs-300);
  }
  .fs-200 {
    font-size: var(--fs-200);
  }
  .fs-100 {
    font-size: var(--fs-100);
  }

  .fw-700 {
    font-weight: var(--fw-700);
  }
  .fw-500 {
    font-weight: var(--fw-500);
  }
  .fw-400 {
    font-weight: var(--fw-400);
  }

  .ls-1 {
    letter-spacing: 1px;
  }
  .ls-2 {
    letter-spacing: 1.15px;
  }
  .ls-3 {
    letter-spacing: 1.3px;
  }
  .ls-4 {
    letter-spacing: 1.5px;
  }
  .ls-5 {
    letter-spacing: 1.7px;
  }
  .ls-6 {
    letter-spacing: 2px;
  }
  .ls-7 {
    letter-spacing: 1rem;
  }

  /* FLOW UTILITY */
  :where(.flow :not(:first-child)) {
    margin-block-start: var(--flow-space, 1.6rem);
  }
  .flow-space--small {
    --flow-space: 1rem;
  }

  .link {
    display: block;
    color: var(--clr-neutral-100);
    font-weight: var(--fw-700);
    letter-spacing: 2px;
  }

  .skip-to-content {
    position: absolute;
    margin-inline: auto;
    padding: 0.5em 1em;
    color: var(--clr-accent-100);
    background: var(--clr-neutral-200);
    clip-path: none;
    z-index: 9999;
    transform: translateY(-120%);
    transition: transform 500ms ease-in-out;

    &:focus {
      outline: 2px solid var(--clr-primary-100);
      transform: translateY(0);
    }
  }

  .full-width {
    box-shadow: 0 0 0 100vmax var(--clr-shadow), 0 0 2rem var(--clr-shadow);
    clip-path: inset(0 -100vmax);
  }

  .section {
    margin-block-start: 15rem;
  }

  .primary-footer {
    --clr-shadow: var(--clr-accent-200);

    background-color: var(--clr-accent-200);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle };
