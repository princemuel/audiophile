import Link from 'next/link';
import styled from 'styled-components';
import type { AnchorProps, ButtonProps, Overload } from './types';

const ButtonVariant = {
  a: 'a',
  button: 'button',
} as const;

// Guard to check if href exists in props
export const isAnchor = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => props?.['data-href'] === true;

export const ButtonComponent: Overload = (props: ButtonProps | AnchorProps) => {
  return isAnchor(props) ? (
    <Link href={props?.href} passHref>
      <Button as='a' {...props}>
        {props.children}
      </Button>
    </Link>
  ) : (
    <Button {...props}>{props.children}</Button>
  );
};

export const Button = styled.button`
  --b-radius: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  background-color: transparent;
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

type StyledProps = {
  kind: 'primary' | 'secondary';
};

const StyledButton = styled(Button)`
  font-size: var(--fs-button);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
`;
const ProductButton = styled(StyledButton)`
  padding-block: 1.43rem;
  padding-inline: 3.8rem;
`;

//  MOBILE TOGGLE
export const MenuButton = styled(Button)`
  & > img {
    width: 2.2rem;
    aspect-ratio: 1;
  }
`;

export const BackButton = styled(Button)`
  margin-block-start: 6rem;

  border-radius: var(--b-radius);
  background: #ffffff;
  box-shadow: 5px 5px 12px #e8e8e8, -5px -5px 12px #ffffff;
`;

export const ButtonPrimary = styled(ProductButton)`
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-100);

  &:hover,
  &:focus-visible {
    background-color: var(--clr-primary-200);
  }
`;

type BtnSecondaryProps = {
  'data-inverted'?: boolean;
};

export const ButtonSecondary = styled(ProductButton)<BtnSecondaryProps>`
  border: ${(props) =>
    props?.['data-inverted'] ? 'none' : '1px solid var(--clr-neutral-900)'};
  color: ${(props) =>
    props?.['data-inverted']
      ? 'var(--clr-neutral-100)'
      : 'var(--clr-neutral-900)'};
  background-color: ${(props) =>
    props?.['data-inverted'] ? 'var(--clr-neutral-900)' : 'transparent'};

  &:hover,
  &:focus-visible {
    color: var(--clr-neutral-100);
    background-color: ${(props) =>
      props?.['data-inverted'] ? 'hsl(0 0% 30%)' : 'var(--clr-neutral-900)'};
  }
`;

export const ButtonLink = styled.a`
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
export const BtnControl = styled(Button)``;

export const CartIcon = styled(Button)``;

// <!-- MOBILE TOGGLE -->
// <button
//   class="btn--mobile-toggle"
//   aria-controls="primary-navigation"
//   aria-expanded="false"
// >
//   <span class="sr-only">Menu</span>
// </button>
