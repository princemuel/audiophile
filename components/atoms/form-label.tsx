import { cn } from '@/lib';
import * as React from 'react';
import { Text } from './text';

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const FormLabel = ({ className, children, ...rest }: Props) => {
  return (
    <Text
      as='label'
      variant={'primary'}
      weight={'bold'}
      className={cn('text-[1.3rem] -tracking-[0.214px]', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

export { FormLabel };
