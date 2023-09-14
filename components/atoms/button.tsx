'use client';

import { cn } from '@/helpers';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';
import * as React from 'react';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {
  asChild?: boolean;
  disabled?: boolean;
}

/**
 * This component will render either a button or the child,
 * depending on the props that are passed to it. This make it ideal for
 * use as link as the button props are passed to the nested link.
 */

export const Button = React.forwardRef(
  (
    {
      variant,
      className,
      modifier,
      size,
      fullWidth,
      disabled,
      weight,
      rounded,
      uppercase,
      asChild,
      ...restProps
    },
    forwardedRef
  ) => {
    const As = asChild ? Slot : 'button';

    return (
      <As
        {...restProps}
        ref={forwardedRef}
        className={cn(
          button({
            variant,
            modifier,
            size,
            fullWidth,
            disabled,
            weight,
            rounded,
            uppercase,
            className,
          })
        )}
        disabled={disabled}
      />
    );
  }
) as ForwardRefComponent<'button', Props>;
Button.displayName = 'Button';

//////////////////////////////////////////
//////////////////////////////////////////
///     BUTTON VARIANTS
//////////////////////////////////////////
//////////////////////////////////////////
const button = cva(
  [
    'relative group inline-flex items-center',
    'transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-1',
  ],
  {
    variants: {
      variant: {
        default: '',
        primary:
          'bg-brand-500 text-white hover:bg-brand-300 focus:bg-brand-300',
        accent: 'text-black/50 hover:text-brand-500 focus:text-brand-500',
        secondary: '',
        destructive: 'bg-red-600 text-white',
        monochrome:
          'bg-black text-white hover:bg-neutral-700 focus:bg-neutral-700',
      },
      modifier: {
        plain: 'border-none bg-transparent',
        outline: 'border border-current bg-transparent',
      },
      size: {
        slim: 'text-sm',
        medium: 'text-sm',
        large: 'text-base',
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
        regular: 'font-normal',
      },
      rounded: {
        default: 'rounded-sm',
        brand: 'rounded-lg',
        pill: 'rounded-pill',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
      uppercase: {
        true: 'uppercase',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-50',
      },
    },
    compoundVariants: [
      {
        modifier: 'outline',
        variant: 'monochrome',
        className:
          'text-black hover:bg-black hover:text-white focus:bg-black focus:text-white',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'primary',
        className:
          'hover:text-brand-500 active:text-brand-500 hover:bg-transparent focus:bg-transparent',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'secondary',
        className:
          'text-green-500 hover:bg-transparent focus:bg-transparent hover:text-green-600',
      },
      {
        modifier: ['outline', 'plain'],
        variant: 'destructive',
        className:
          'text-red-500 hover:bg-transparent focus:bg-transparent hover:text-red-600',
      },
      {
        size: 'slim',
        className: 'px-3 py-1',
      },
      {
        size: 'medium',
        className: 'px-8 py-3',
      },
      {
        // modifier: "",
        size: 'large',
        className: 'px-8 py-3',
      },
      {
        size: 'large',
        className: 'px-9 py-3',
      },
      { disabled: true, variant: 'default', className: 'border-gray-200' },
    ],

    defaultVariants: {
      variant: 'default',
      weight: 'bold',
      uppercase: true,
    },
  }
);
