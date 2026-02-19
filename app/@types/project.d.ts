type Simplify<T> = { [K in keyof T]: T[K] } & NonNullable<unknown>;
// as prop
type AsProp<C extends React.ElementType> = { as?: C };

type PolymorphicProps<C extends React.ElementType, P = {}> = Simplify<
  P & AsProp<C> & Omit<ComponentPropsWithRef<C>, keyof P | 'as'>
>;
