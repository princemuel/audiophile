'use client';

import { cn } from '@/lib';
import type { VariantProps } from 'cva';
import { cva } from 'cva';
import { ButtonOrLink } from './button-or-link';

const buttonVariants = cva(
  [
    'flex items-center font-bold text-white',
    'transition-colors duration-300',
    'disabled:pointer-events-none disabled:cursor-not-allowed',
  ],
  {
    defaultVariants: {
      intent: 'primary',
      size: 'xs',
    },

    variants: {
      intent: {
        primary: 'bg-brand-500 hover:bg-brand-300',
        secondary:
          'bg-brand-500/10 dark:bg-brand-500/25 text-brand-500 hover:bg-white dark:hover:bg-white',
        outline: '',
        ghost: '',
        destructive: 'bg-accent-200 hover:bg-accent-100',
        link: 'underline-offset-2 hover:underline',
        unbranded: '',
      },
      size: {
        s: '',
        xs: 'text-',
        sm: 'text-',
        md: 'text-',
        lg: 'text-',
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
        intent: 'primary',
        size: 'lg',
        fullWidth: true,
        weight: 'bold',
      },
      {
        intent: 'destructive',
        size: 'sm',
        fullWidth: true,
      },
    ],
  }
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

const button = (variants: ButtonVariants, className = '') =>
  cn(buttonVariants(variants), className);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  href?: __next_route_internal_types__.RouteImpl<string>;
}

const Button = ({
  href,
  intent,
  weight,
  size,
  radius,
  className,
  fullWidth,
  children,
  ...rest
}: Props) => {
  return (
    //@ts-expect-error button and next/link component types are mixing
    <ButtonOrLink
      href={href}
      className={button({ intent, size, weight, radius, fullWidth }, className)}
      {...rest}
    >
      {children}
    </ButtonOrLink>
  );
};

// only these two exports below are needed
export { Button, button }; ///////////////
// only these two exports above are needed
