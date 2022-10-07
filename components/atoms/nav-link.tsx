import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import styled from 'styled-components';

interface Props extends LinkProps {
  children: ReactNode;
}

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`;

function NavLink({ href, children, ...props }: Props) {
  const asPath = useRouter();
  const active = href === asPath;
  const child = Children.only(children) as ReactElement;
  const childClassName = child.props.className ?? '';
  const className = active ? `${childClassName} active` : childClassName;

  return (
    <Link href={href} passHref {...props}>
      {cloneElement(child, {
        className: className || null,
        'aria-current': active ? 'page' : null,
      })}
    </Link>
  );
}

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyCustomComponent = forwardRef<HTMLAnchorElement>(
  ({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  }
);

// Usage
// function Home() {
//   return (
//     <Link href='/about' passHref>
//       <MyButton />
//     </Link>
//   );
// }

export { NavLink, MyCustomComponent };
