import { cn } from '@/lib';
import { FormControl, FormErrorText, FormInput, FormLabel } from '../atoms';
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

const FormField = ({
  name,
  type,
  placeholder,
  label,
  defaultValue,
  autoComplete,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
}: Props) => {
  return (
    <FormControl as='div' className={cn('relative', className)}>
      <FormInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
      />

      <div className='flex items-center justify-between text-brand-500 peer-aria-[invalid="true"]:!text-brand-800'>
        <FormLabel htmlFor={name} className={labelClassName}>
          {label}
        </FormLabel>
        <FormErrorText id={name} className={errorClassName} />
      </div>
    </FormControl>
  );
};

export { FormField };
