import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
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
  &:focus {
    outline: none;
  }
`;
const StyledButton = styled(Button)`
  font-size: 1.3rem;
  font-weight: var(--fw-700);
  text-transform: uppercase;
`;
const ProductButton = styled(StyledButton)`
  padding-block: 1.5rem;
  padding-inline: 6.3rem;
`;

//  MOBILE TOGGLE
export const MobileMenuButton = styled(Button)``;

export const ButtonPrimary = styled(ProductButton)`
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-100);

  &:hover,
  &:focus {
    background-color: var(--clr-primary-200);
  }
`;

export const ButtonAccent = styled(ProductButton)`
  border: 1px solid var(--clr-accent-100);
  color: var(--clr-accent-100);
  background-color: var(--clr-neutral-100);

  &:hover,
  &:focus {
    color: var(--clr-neutral-100);
    background-color: var(--clr-accent-100);
  }
`;

export const ButtonCTA = styled(StyledButton)`
  display: flex;
  align-items: center;
  color: hsl(var(--clr-700) / 0.5);
  background-color: var(--clr-neutral-100);

  &:hover,
  &:focus {
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
