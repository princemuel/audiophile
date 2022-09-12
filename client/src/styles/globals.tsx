import styled, { createGlobalStyle, css } from 'styled-components';

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

    --fw-700: 700;
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;
    --fw-300: 300;

    --ff-sans-normal: 'Manrope', sans-serif;
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

  /* Set core body defaults */
  body {
    min-height: 100vh;
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
  picture:not([hidden]) {
    height: auto;
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul,
  ol {
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

    --ff-primary: var(--ff-sans-normal);

    background: var(--clr-neutral-100);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    font-size: var(--fs-400);
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

  .fw-700 {
    font-weight: var(--fw-700);
  }
  .fw-500 {
    font-weight: var(--fw-500);
  }
  .fw-400 {
    font-weight: var(--fw-400);
  }
  .fw-300 {
    font-weight: var(--fw-300);
  }

  .heading {
    font-weight: var(--fw-700);
    text-transform: uppercase;
  }

  .highlighted {
    --clr-highlight: var(--clr-primary-100);
    color: var(--clr-highlight);
  }

  /* FLOW UTILITY */
  .flow > *:where(:not(:first-child)) {
    margin-block-start: var(--flow-space, 1em);
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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: none;
    white-space: nowrap;
    border: 0;
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

  .primary-header {
    --clr-shadow: var(--clr-accent-200);

    position: sticky;
    top: 0;
    background-color: var(--clr-accent-200);
  }

  .primary-footer {
    --clr-shadow: var(--clr-accent-200);

    background-color: var(--clr-accent-200);
  }
`;

const GlobalContainer = styled.div`
  width: min(90%, 110rem);
  margin-inline: auto;
  /* padding-inline: var(--spacer, 1em); */
`;

const GlobalOverlay = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  inset: 0;
  width: min(90%, 110rem);
  height: min-content;
  margin-inline: auto;
  /* padding-inline: var(--spacer, 2em); */
  box-shadow: 0 0 0 100vmax rgb(0 0 0 / 0.5), 0 0 2rem rgb(0 0 0 / 0.5);

  &[open] {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle, GlobalContainer, GlobalOverlay };
