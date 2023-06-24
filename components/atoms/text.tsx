import { cn } from '@/lib';
import type { VariantProps } from 'cva';
import { cva } from 'cva';

const textVariants = cva('', {
  defaultVariants: {
    intent: 'primary',
    size: 'base',
  },
  variants: {
    intent: {
      primary: 'text-black',
      secondary: 'text-brand-500',
    },
    size: {
      xs: '',
      s: 'text-200 leading-300 tracking-100',
      sx: 'text-300 leading-100 tracking-700',
      base: 'text-400 leading-300',
      sm: 'text-500 leading-200 tracking-300',
      md: 'text-600 leading-400 tracking-500',
      xl: 'text-700 leading-600 tracking-600',
      '2xl': 'text-800 leading-500 tracking-200',
      '3xl': 'text-900 leading-700 tracking-400',
      '4xl': 'text-xl leading-800 tracking-600',
    },

    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      regular: 'font-normal',
    },
    uppercase: {
      true: 'uppercase',
    },
  },
  compoundVariants: [
    {
      intent: 'secondary',
      size: 'xs',
      weight: 'bold',
      class: 'tracking-100',
    },
  ],
});

interface TextVariants extends VariantProps<typeof textVariants> {}
const text = (variants: TextVariants, className = '') =>
  cn(textVariants(variants), className);

type TextProps<E extends React.ElementType = 'p'> = ElementProps<E> &
  TextVariants;

const Text = <E extends React.ElementType = 'p'>({
  as: As,
  intent,
  weight,
  size,
  className,
  children,
  ...rest
}: TextProps<E>) => {
  const Rendered = As || 'p';

  return (
    <Rendered className={text({ intent, weight, size }, className)} {...rest}>
      {children}
    </Rendered>
  );
};

export { Text };
