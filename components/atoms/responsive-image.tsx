import { cn, shimmer, toBase64 } from '@/lib';
import Image from 'next/image';

interface Props extends PropsFrom<typeof Image> {
  children?: React.ReactNode;
}

// !! Refactor this component later
const ResponsiveImage = ({
  alt,
  src,
  className,
  width = 700,
  height = 475,
  priority = false,
  blurDataURL = `data:image/svg+xml;base64,${toBase64(
    shimmer(Number(width), Number(height))
  )}`,
  children,
  ...rest
}: Props) => (
  <figure className={cn('h-full w-full', className)}>
    {children || (
      <Image
        src={src}
        alt={alt}
        className={cn('')}
        width={width}
        height={height}
        priority={priority}
        placeholder='blur'
        blurDataURL={blurDataURL}
        {...rest}
      />
    )}
  </figure>
);

export { ResponsiveImage };
