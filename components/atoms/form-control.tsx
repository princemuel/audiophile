import { cx } from 'cva';

const FormControl = <E extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: ElementProps<E>) => {
  const RenderedElement = as || 'div';

  return (
    <RenderedElement
      className={cx('flex flex-col-reverse gap-3', className)}
      {...rest}
    >
      {children}
    </RenderedElement>
  );
};

export { FormControl };
