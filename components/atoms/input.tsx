import { cn } from '@/helpers';
import { forwardRef } from 'react';
import { Text } from './text';

export const TextField = forwardRef(({ className, ...rest }, forwardedRef) => {
  return (
    <>
      <input
        className={cn(
          'peer w-full rounded-lg border border-slate-300 bg-transparent px-5 py-4 text-300 font-bold -tracking-[0.25px] text-black caret-brand-500 outline-none autofill:bg-transparent hover:border-brand-500 focus:border-brand-500 aria-[invalid="true"]:!border-brand-800 aria-[invalid="true"]:!text-brand-800 focus:aria-[invalid="true"]:!border-brand-800',
          className
        )}
        {...rest}
        ref={forwardedRef}
      />
    </>
  );
}) as ForwardRefComponent<'input', {}>;

TextField.displayName = 'TextField';

export const FormControls = <E extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: ElementProps<E>) => {
  const RenderedElement = as || 'div';

  return (
    <RenderedElement
      className={cn('flex flex-col-reverse gap-3', className)}
      {...rest}
    >
      {children}
    </RenderedElement>
  );
};

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export const Label = ({ className, children, ...rest }: LabelProps) => {
  return (
    <Text
      as='label'
      variant={'monochrome'}
      weight={'bold'}
      className={cn('text-xs -tracking-[0.214px]', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

interface FormHelperTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const FormHelperText = ({
  className,
  children,
  ...rest
}: FormHelperTextProps) => {
  return (
    <Text
      as='p'
      role='alert'
      aria-live='assertive'
      weight={'bold'}
      className={cn('text-xs -tracking-[0.214px] text-inherit', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};
