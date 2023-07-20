'use client';

import { cx } from 'cva';
import { useFormContext } from 'react-hook-form';
import { Text } from './text';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  message?: string;
}

const FormErrorText = ({
  id = '',
  message,
  className,
  children,
  ...rest
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Text
      as='span'
      role='alert'
      id={`errors-${id}`}
      aria-live='assertive'
      weight={'medium'}
      className={cx(
        'text-[1.2rem] leading-[1.5] -tracking-[0.214px] text-inherit',
        className
      )}
      {...rest}
    >
      {children || message || `${errors?.[id]?.message || ''}`}
    </Text>
  );
};

export { FormErrorText };
