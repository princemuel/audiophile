type AsProp<C extends React.ElementType> = { as?: C };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = NonNullable<unknown>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = NonNullable<unknown>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

type Props<C extends React.ElementType> = PolymorphicComponentPropWithRef<C>;

export const Fence = <C extends React.ElementType = "span">({
  as,
  children,
  ref,
  ...attrs
}: Props<C>) => {
  const Tag = as || "span";
  return (
    <Tag ref={ref} {...attrs}>
      {children}
    </Tag>
  );
};
