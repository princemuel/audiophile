// Allow TypeScript to import SVG files using Webpack's `svgr` loader.
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare global {
  interface ObjectConstructor {
    entries<T extends {}>(object: T): ReadonlyArray<Misc.Entry<T>>;
  }
}
