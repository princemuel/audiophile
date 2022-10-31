import { links } from 'common';
import Link from 'next/link';
import { ScreenReader } from '../typography';

interface Props {
  className?: string;
}

const Logo = (props: Props) => {
  return (
    <Link href={'/'} passHref>
      <a {...props}>
        <>{links?.logo}</>
        <ScreenReader>Audiophile Logo.</ScreenReader>
      </a>
    </Link>
  );
};

export { Logo };
