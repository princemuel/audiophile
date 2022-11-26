import Image from 'next/future/image';
import { VisuallyHidden } from '../typography';

type Props = {
  src: string;
  alt: string;
  defaultWidth?: string;
  defaultHeight?: string;
  classes?: string;
};

const Avatar = ({ src, alt, defaultWidth, defaultHeight, classes }: Props) => {
  return (
    <span>
      <Image
        className={classes ?? ''}
        src={src}
        alt={alt}
        width={defaultWidth ?? ''}
        height={defaultHeight ?? ''}
      />
      <VisuallyHidden>{alt}</VisuallyHidden>
    </span>
  );
};

export { Avatar };
