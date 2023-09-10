import { cn } from '@/helpers';
import { cva, type VariantProps } from 'cva';
import { forwardRef } from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-black/50',
      brand: 'text-brand-500',
      monochrome: 'text-black',
    },
    modifier: {
      inverted: 'text-white',
      'black/40': 'text-black/40',
      'white/50': 'text-white/50',
    },
    size: {
      'xx-small': 'text-200 leading-300 tracking-100', // sub title
      'x-small': 'text-300 leading-100 tracking-700', // ovrline new product
      base: 'text-400 leading-300', // body
      small: 'text-500 leading-200 tracking-300', // h6
      medium: 'text-600 leading-400 tracking-500', // h5
      large: 'text-700 leading-600 tracking-600', //h4
      xl: 'text-800 leading-500 tracking-200', // h3
      '2xl': 'text-900 leading-700 tracking-400', // h2
      '3xl': 'text-xl leading-800 tracking-600', // h1
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      regular: 'font-normal',
    },
  },
  compoundVariants: [
    {
      size: ['3xl', '2xl', 'xl', 'large', 'medium', 'small', 'x-small'],
      weight: 'bold',
      className: 'uppercase',
    },
    {
      size: ['x-small'],
      weight: 'regular',
      className: 'uppercase',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'base',
    weight: 'medium',
  },
});

interface TextVariants extends VariantProps<typeof textVariants> {}
const text = (variants: TextVariants, className = '') =>
  cn(textVariants(variants), className);

export const Text = forwardRef(
  (
    {
      as: As,
      variant,
      weight,
      modifier,

      size,
      className,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const Rendered = As || 'p';

    return (
      <Rendered
        className={text({ variant, modifier, size, weight }, className)}
        {...rest}
        ref={forwardedRef}
      >
        {children}
      </Rendered>
    );
  }
) as ForwardRefComponent<'p', TextVariants>;

Text.displayName = 'Text';
