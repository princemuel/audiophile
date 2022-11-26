import { devices } from 'helpers';
import { createGlobalStyle, css } from 'styled-components';

const basicStyles = css`
  /* -------------------------------- */
  /* BASE                             */
  /* -------------------------------- */

  /*!Theme Name:
Theme URI: https://audiozone.vercel.app/
Repository: https://github.com/princemuel/audiophile
Description: An Audiophile E-Conmmerce Project from Frontend Mentor Challeges
Author's Name: Samuel Chukwuzube
Author's Moniker: princemuel
Version: 01
*/

  /* ////////////////////////////////////////////
  // BASE CONFIGURATION
  */

  /* ================================= */
  /*               RESETS              */
  /* ================================= */
  :root {
    /* colors */
    --clr-800: 0 0% 0%;
    --clr-700: 0 0% 6%;
    --clr-600: 0 0% 8%;
    --clr-500: 22 65% 57%;
    --clr-400: 21 94% 75%;
    --clr-300: 0 0% 95%;
    --clr-200: 0 0% 98%;
    --clr-100: 0 0% 100%;

    --ff-primary: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

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

    --fw-400: 400;
    --fw-500: 500;
    --fw-700: 700;

    --fw-700: 700;
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;
    --fw-300: 300;

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
    font-size: 56.25%;
    text-rendering: optimizeSpeed;
    -webkit-text-size-adjust: none;

    @media ${devices?.desktop?.('min')} {
      font-size: 62.5%;
    }
    @media ${devices?.flatscreen?.('min')} {
      font-size: 75%;
    }

    /* &,
    &:focus-within {
      scroll-behavior: smooth;
    } */
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: inherit;
  }

  :where([hidden]:not([hidden='until-found'])) {
    display: none !important;
  }

  /*********** SCROLLBARS: REFACTOR THIS ************/
  *,
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  /* Set core body defaults */
  :where(body) {
    /* Changed to min- to prevent cropping */
    /* min-height: 100%; */
    min-block-size: 100vh;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
  }

  :where(h1, h2, h3) {
    line-height: calc(1em + 0.5rem);
  }
  :where(p, h1, h2, h3, h4, h5, h6) {
    overflow-wrap: break-word;
  }

  :where(hr) {
    border: none;
    border-block-start: 1px solid;
    color: inherit;
    block-size: 0;
    overflow: visible;
  }

  :where(input, button, textarea, select) {
    font: inherit;
    color: inherit;
  }
  :where(button, label, select, summary, [role='button'], [role='option']) {
    cursor: pointer;
  }
  :where(textarea) {
    resize: vertical;
    resize: block;
  }
  :where(:disabled) {
    cursor: not-allowed;
  }
  :where(label:has(* > input:disabled), label:has(* + input:disabled)) {
    cursor: not-allowed;
  }
  /* Remove list styles on ul, ol elements  */
  :where(ul, ol) {
    list-style: none;
  }

  :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }
  :where(img, picture, svg) {
    max-inline-size: 100%;
    block-size: auto;
    object-fit: cover;
  }
  @media not all and (min-resolution: 0.001dpcm) {
    :where(img[loading='lazy']) {
      clip-path: inset(0.5px);
    }
  }
  :where(.icon) {
    --clr-icon: currentColor;
    fill: currentColor;
  }

  /* Anchor elements that don't have a class get default styles */
  :where(a) {
    text-decoration: none;
    text-underline-offset: 0.2ex;
  }
  :where(a:not([class])) {
    text-decoration-skip-ink: auto;
  }

  :where(:focus-visible) {
    outline: 2px solid var(--focus-color, Highlight);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    :where(html:focus-within) {
      scroll-behavior: smooth;
      scroll-behavior: auto;
    }
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

  /* ================================= */
  /*            TYPOGRAPHY             */
  /* ================================= */
  :where(body) {
    /* Levels of white */
    --clr-neutral-100: hsl(var(--clr-100));
    --clr-neutral-200: hsl(var(--clr-200));
    --clr-neutral-300: hsl(var(--clr-300));

    /* Levels of dark */
    --clr-neutral-700: hsl(var(--clr-600));
    --clr-neutral-800: hsl(var(--clr-700));
    --clr-neutral-900: hsl(var(--clr-800));

    /* Levels of brown */
    --clr-primary-100: hsl(var(--clr-500));
    --clr-primary-200: hsl(var(--clr-400));

    --text-color: var(--clr-neutral-900);
    --bg-color: var(--clr-neutral-200);

    --fw-regular: var(--fw-400);
    --fw-semi-bold: var(--fw-500);
    --fw-bold: var(--fw-700);

    --fs-body: var(--fs-400);
    --fs-primary-heading: var(--fs-800);
    --fs-secondary-heading: var(--fs-700);
    --fs-button: var(--fs-200);

    --ff-body: var(--ff-primary);
    --ff-heading: var(--ff-primary);

    color: var(--text-color);
    background: var(--bg-color);
    font-family: var(--ff-body);
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-body);
  }

  /* ================================= */
  /*            UTILITIES              */
  /* ================================= */

  /* *********** FLOW UTILS ************* */
  :where(.flow > :not(:first-child)) {
    margin-block-start: var(--flow-space, 1.6rem);
  }
  .flow-space--small {
    --flow-space: 1rem;
  }

  /* *********** FLEX UTILS ************* */
  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }

  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }

  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }

  /* *********** COLOR UTILS ************* */
  .text-neutral-900 {
    color: var(--clr-neutral-900);
  }
  .text-neutral-800 {
    color: var(--clr-neutral-800);
  }
  .text-neutral-700 {
    color: var(--clr-neutral-700);
  }
  .text-neutral-300 {
    color: var(--clr-neutral-300);
  }
  .text-neutral-200 {
    color: var(--clr-neutral-200);
  }
  .text-neutral-100 {
    color: var(--clr-neutral-100);
  }

  .text-primary-200 {
    color: var(--clr-primary-200);
  }
  .text-primary-100 {
    color: var(--clr-primary-100);
  }

  .bg-neutral-900 {
    background-color: var(--clr-neutral-900);
  }
  .bg-neutral-800 {
    background-color: var(--clr-neutral-800);
  }
  .bg-neutral-700 {
    background-color: var(--clr-neutral-700);
  }
  .bg-neutral-300 {
    background-color: var(--clr-neutral-300);
  }
  .bg-neutral-200 {
    background-color: var(--clr-neutral-200);
  }
  .bg-neutral-100 {
    background-color: var(--clr-neutral-100);
  }

  .bg-primary-200 {
    background-color: var(--clr-primary-200);
  }
  .bg-primary-100 {
    background-color: var(--clr-primary-100);
  }

  /* *********** TYPOGRAPHY UTILS ************* */
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

  /* LINE HEIGHT */
  .leading-800 {
    line-height: 5.8rem;
  }
  .leading-700 {
    line-height: 4.4rem;
  }
  .leading-600 {
    line-height: 3.8px;
  }
  .leading-500 {
    line-height: 3.6px;
  }
  .leading-400 {
    line-height: 3.3px;
  }
  .leading-300 {
    line-height: 2.5px;
  }
  .leading-200 {
    line-height: 2.4px;
  }
  .leading-100 {
    line-height: 1.9px;
  }

  /* CHARACTER SPACING */
  .tracking-700 {
    letter-spacing: 1rem;
  }
  .tracking-600 {
    letter-spacing: 2px;
  }
  .tracking-500 {
    letter-spacing: 1.7px;
  }
  .tracking-400 {
    letter-spacing: 1.5px;
  }
  .tracking-300 {
    letter-spacing: 1.3px;
  }
  .tracking-200 {
    letter-spacing: 1.15px;
  }
  .tracking-100 {
    letter-spacing: 1px;
  }

  .uppercase {
    text-transform: uppercase;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .text-center {
    text-align: center;
  }

  :where(li a) {
    display: block;
    color: var(--clr-neutral-100);
    font-weight: var(--fw-bold);
    letter-spacing: 2px;
  }

  .icon-class {
    color: var(--clr-neutral-100);

    &:where(:hover, :active, :focus) {
      color: var(--clr-primary-100);
    }
  }

  .navigation-link:where(:hover, :focus),
  [aria-current='page'] {
    color: var(--clr-primary-100);
  }

  .skip-to-content {
    position: absolute;
    margin-inline: auto;
    padding: 0.5em 1em;
    color: var(--clr-neutral-800);
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

  .w-full-shadow {
    box-shadow: 0 0 0 100vmax currentColor, 0 0 2rem currentColor;
    clip-path: inset(0 -100vmax);
  }

  .section {
    margin-block-start: 15rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle };
