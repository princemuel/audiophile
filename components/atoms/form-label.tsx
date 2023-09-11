import { cn } from '@/helpers';
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
      variant={'monochrome'}
      weight={'bold'}
      className={cn('text-xs -tracking-[0.214px]', className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

export { FormLabel };
