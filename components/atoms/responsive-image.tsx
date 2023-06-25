import { cn } from '@/lib';
import Image from 'next/image';

interface Props extends PropsFrom<typeof Image> {
  containerClassName?: string;
}

const ResponsiveImage = ({
  alt,
  src,
  className,
  width = 500,
  height = 500,
  priority = false,
  containerClassName,
  ...rest
}: Props) => (
  <figure className={cn('h-full w-full', containerClassName)}>
    <Image
      src={src}
      alt={alt}
      className={cn('', className)}
      width={width}
      height={height}
      priority={priority}
      {...rest}
    />
  </figure>
);

export { ResponsiveImage };
