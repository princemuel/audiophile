'use client';

import { cn } from '@/lib';
import type { VariantProps } from 'cva';
import { cva } from 'cva';
import type { Route } from 'next';
import Link from 'next/link';

const buttonVariants = cva(
  [
    'flex items-center font-bold text-white',
    'transition-colors duration-300',
    'disabled:pointer-events-none disabled:cursor-not-allowed',
  ],
  {
    defaultVariants: {
      variant: 'primary',
      size: 'xs',
    },

    variants: {
      variant: {
        primary: 'bg-brand-500 hover:bg-brand-300',
        secondary:
          'bg-brand-500/10 text-brand-500 hover:bg-white dark:bg-brand-500/25 dark:hover:bg-white',
        outline: '',
        ghost: '',
        destructive: '',
        link: 'underline-offset-2 hover:underline',
        unbranded: '',
      },
      size: {
        s: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
      fullWidth: {
        true: 'w-full',
      },
      radius: {
        pill: 'rounded-pill',
        full: 'rounded-full',
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'lg',
        fullWidth: true,
        weight: 'bold',
      },
      {
        variant: 'destructive',
        size: 'sm',
        fullWidth: true,
      },
    ],
  }
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

const button = (variants: ButtonVariants, className = '') =>
  cn(buttonVariants(variants), className);

// type AnchorProps = ButtonVariants & DefaultAnchorProps;
// type ButtonProps = ButtonVariants & DefaultButtonProps;

// type Props = AnchorProps | ButtonProps;

type ButtonProps = React.JSX.IntrinsicElements['button'];

export interface Props<T extends string> extends ButtonProps, ButtonVariants {
  href: Route<T> | URL;
}

const Button = <T extends string>({
  href,
  variant,
  weight,
  size,
  radius,
  className,
  fullWidth,
  children,
  ...rest
}: Props<T>) => {
  return (
    <ButtonOrLink
      // @ts-expect-error type undefined failing due to required href
      href={href}
      className={button(
        { variant, size, weight, radius, fullWidth },
        className
      )}
      {...rest}
    >
      {children}
    </ButtonOrLink>
  );
};

// only these two exports below are needed
export { Button, button }; ///////////////
// only these two exports above are needed

type ButtonOrLinkProps = React.ComponentProps<'button'> &
  React.ComponentProps<'a'>;

interface ButtonOrLinkPropsType extends ButtonOrLinkProps {
  children: React.ReactNode;
  href?: __next_route_internal_types__.RouteImpl<unknown>;
}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
function ButtonOrLink({ href, ...props }: ButtonOrLinkPropsType) {
  const isAnchor = typeof href !== 'undefined';
  const Rendered = isAnchor ? 'a' : 'button';

  const element = <Rendered {...props} />;

  if (isAnchor) {
    return (
      <Link href={href} {...props} legacyBehavior>
        {element}
      </Link>
    );
  }

  return element;
}
