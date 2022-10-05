import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  background: transparent;
  font: inherit;
  letter-spacing: var(--spacing);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus-visible {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  font-size: var(--fs-button);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
`;
const ProductButton = styled(StyledButton)`
  padding-block: 1.5rem;
  padding-inline: 3.5rem;
`;

//  MOBILE TOGGLE
export const MenuButton = styled(Button)`
  & > img {
    width: 2.2rem;
    aspect-ratio: 1;
  }
`;

export const ButtonPrimary = styled(ProductButton)`
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-100);

  &:hover,
  &:focus-visible {
    background-color: var(--clr-primary-200);
  }
`;

export const ButtonSecondary = styled(ProductButton)`
  border: 1px solid var(--clr-accent-100);
  color: var(--clr-accent-100);
  background-color: var(--clr-neutral-100);

  &:hover,
  &:focus-visible {
    color: var(--clr-neutral-100);
    background-color: var(--clr-accent-100);
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  color: hsl(var(--clr-700) / 0.5);
  background-color: var(--clr-neutral-100);
  font-size: var(--fs-button);
  font-weight: var(--fw-bold);
  text-transform: uppercase;

  &:hover,
  &:focus-visible {
    color: var(--clr-primary-100);
    background-color: inherit;
  }

  & > img {
    margin-inline-start: 1rem;
  }
`;

// <!-- MOBILE TOGGLE -->
// <button
//   class="btn--mobile-toggle"
//   aria-controls="primary-navigation"
//   aria-expanded="false"
// >
//   <span class="sr-only">Menu</span>
// </button>
