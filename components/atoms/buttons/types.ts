import {} from 'next/link';
import { Url } from 'url';
// Button props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  'data-href'?: boolean;
};

// Anchor props
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  'data-href': boolean;
  href: Url;
};

// Input/output options
export type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};
