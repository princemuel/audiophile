import { forwardRef } from 'react';
import { Text } from './text';

export const TextField = forwardRef(({ className, ...rest }, forwardedRef) => {
  return (
    <>
      <input
        className={tw(
          'peer w-full rounded-lg border border-slate-300 bg-transparent px-5 py-4 text-300 font-bold -tracking-[0.25px] text-black caret-brand-500 outline-none autofill:bg-transparent hover:border-brand-500 focus:border-brand-500 aria-[invalid="true"]:!border-brand-800 focus:aria-[invalid="true"]:!border-brand-800',
          className
        )}
        {...rest}
        ref={forwardedRef}
      />
    </>
  );
}) as ForwardRefComponent<'input', {}>;
TextField.displayName = 'TextField';

export const FormControl = <E extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: ElementProps<E>) => {
  const RenderedElement = as || 'div';

  return (
    <RenderedElement className={tw('flex flex-col-reverse gap-3', className)} {...rest}>
      {children}
    </RenderedElement>
  );
};

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export function FormLabel({ className, children, ...rest }: LabelProps) {
  return (
    <Text
      as='label'
      weight='bold'
      className={tw('text-xs -tracking-[0.214px] text-inherit', className)}
      {...rest}
    >
      {children}
    </Text>
  );
}

interface FormHelperTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const FormHelperText = ({ className, children, ...rest }: FormHelperTextProps) => {
  return (
    <Text
      as='p'
      role='alert'
      aria-live='assertive'
      weight='bold'
      className={tw('text-xs -tracking-[0.214px] text-inherit', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};
