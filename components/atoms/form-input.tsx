'use client';

import { cx } from 'cva';
import { useFormContext } from 'react-hook-form';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
}

const FormInput = ({ name, className, type, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(`${name}`, {
        valueAsNumber: type === 'number' || undefined,
      })}
      className={cx(
        'peer w-full rounded-brand border border-slate-300 bg-transparent px-8 py-6 text-300 font-bold -tracking-[0.25px] text-black caret-brand-500 outline-none autofill:bg-transparent aria-[invalid="true"]:!border-brand-800 aria-[invalid="true"]:!text-brand-800 hover:border-brand-500 focus:border-brand-500 focus:aria-[invalid="true"]:!border-brand-800',
        className
      )}
      type={type}
      aria-invalid={errors?.[name] ? 'true' : 'false'}
      aria-errormessage={`errors-${name}`}
      {...rest}
    />
  );
};
export { FormInput };
