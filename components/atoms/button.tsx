'use client';

import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';
import * as React from 'react';

const buttonVariants = cva(
  [
    'inline-flex items-center gap-4 font-bold text-white',
    'transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-1',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      text: 'base',
      weight: 'bold',
    },

    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white hover:bg-brand-300 focus:bg-brand-300',
        neutral:
          'border border-black bg-transparent text-black hover:bg-black hover:text-white focus:bg-black focus:text-white',
        'text-primary/25':
          'text-black/25 hover:text-brand-500 focus:text-brand-500',
        'text-primary/50':
          'text-black/50 hover:text-brand-500 active:text-brand-500',
        none: null,
      },
      text: {
        base: 'text-200 uppercase leading-300 tracking-100',
        link: 'text-400 leading-300',
        none: null,
      },
      size: {
        sx: '',
        sm: 'px-7 py-5',
        base: 'px-12 py-5',
        md: '',
        none: null,
      },
      fullWidth: {
        true: 'w-full',
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
        regular: 'font-normal',
      },
      uppercase: {
        true: 'uppercase',
      },
      radius: {
        pill: 'rounded-pill',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      // {
      //   variant: 'primary',
      //   size: 'lg',
      //   fullWidth: true,
      //   weight: 'bold',
      // },
      // {
      //   variant: 'destructive',
      //   size: 'sm',
      //   fullWidth: true,
      // },
    ],
  }
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

const button = (variants: ButtonVariants, className = '') =>
  cn(buttonVariants(variants), className);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

/**
 * This component will render either a button or the child,
 * depending on the props that are passed to it. This make it ideal for
 * use as link as the button props are passed to the nested link.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      weight,
      text,
      size,
      radius,
      className,
      fullWidth,
      uppercase,
      asChild = false,
      ...rest
    },
    ref
  ) => {
    const RenderedElement = asChild ? Slot : 'button';
    return (
      <RenderedElement
        className={button(
          { variant, text, size, weight, radius, fullWidth, uppercase },
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';

// only these two exports below are needed
export { Button, button }; ///////////////
// only these two exports above are needed
