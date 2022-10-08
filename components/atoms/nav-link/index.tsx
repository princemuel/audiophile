import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ReactElement, ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
}

const NavLink = ({ href, children, ...props }: Props) => {
  const asPath = useRouter();
  const active = href === asPath;
  const child = Children.only(children) as ReactElement;
  const childClassName = child.props.className || '';
  const className = active
    ? `${childClassName} nav-link active`.trim()
    : `${childClassName} nav-link`.trim();

  return (
    <Link href={href} passHref {...props}>
      {cloneElement(child, {
        className: className || null,
        'aria-current': active ? 'page' : null,
      })}
    </Link>
  );
};

export { NavLink };
