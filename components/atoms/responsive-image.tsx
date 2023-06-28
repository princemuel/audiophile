import { cn, shimmer, toBase64 } from '@/lib';
import Image from 'next/image';

interface Props extends PropsFrom<typeof Image> {
  container?: string;
}

const ResponsiveImage = ({
  alt,
  src,
  className,
  width = 700,
  height = 475,
  priority = false,
  container,
  ...rest
}: Props) => (
  <figure className={cn('h-full w-full', container)}>
    <Image
      src={src}
      alt={alt}
      className={cn('', className)}
      width={width}
      height={height}
      priority={priority}
      placeholder='blur'
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      {...rest}
    />
  </figure>
);

export { ResponsiveImage };
