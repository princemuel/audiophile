import Link from 'next/link';

type ButtonOrLinkProps = React.ComponentProps<'button'> &
  React.ComponentProps<'a'>;

interface ButtonProps extends ButtonOrLinkProps {
  children: React.ReactNode;
  href?: __next_route_internal_types__.RouteImpl<string>;
}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, ...props }: ButtonProps) {
  const isAnchor = typeof href !== 'undefined';
  const Rendered = isAnchor ? 'a' : 'button';

  const element = <Rendered {...props} />;

  if (isAnchor) {
    return (
      <Link href={href} legacyBehavior={true}>
        {element}
      </Link>
    );
  }

  return element;
}
