// import Link from 'next/link';
// import * as React from 'react';
// import type { UrlObject } from 'url';

// export type DefaultButtonProps = React.JSX.IntrinsicElements['button'] & {
//   to?: undefined;
// };

// export type DefaultAnchorProps = PropsFrom<typeof Link> & {
//   to: UrlObject | __next_route_internal_types__.RouteImpl<unknown>;
// };

// type ButtonOrLinkOverload = {
//   (props: DefaultButtonProps): React.JSX.Element;
//   (props: DefaultAnchorProps): React.JSX.Element;
// };

// const isAnchor = (
//   props: DefaultButtonProps | DefaultAnchorProps
// ): props is DefaultAnchorProps => props?.['to'] !== undefined;

// /**
//  * This is a base component that will render either a button or a link,
//  * depending on the props that are passed to it. The link rendered will
//  * also correctly get wrapped in a next/link component to ensure ideal
//  * page-to-page transitions.
//  */

// export const ButtonOrLink: ButtonOrLinkOverload = (
//   props: DefaultButtonProps | DefaultAnchorProps
// ) => {
//   return isAnchor(props) ? (
//     <Link {...props} href={props?.['to']} />
//   ) : (
//     <button {...props} />
//   );
// };

export {};
