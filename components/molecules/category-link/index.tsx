import { ArrowSVG } from 'common';
import { ButtonLink, Heading } from 'components';
import Image from 'next/future/image';
import Link from 'next/link';
import { CategoryCard } from './styles';

type Props = {
  title: string;
  url: string;
  image: string;
};

const CategoryLink = ({ title, url, image }: Props) => {
  return (
    <CategoryCard>
      <figure>
        <Image src={image} alt={title} />
      </figure>

      <Heading className=''>{title}</Heading>

      <Link href={url} passHref>
        <ButtonLink>
          <span>Shop</span>
          <Image src={ArrowSVG} alt={`shop for ${title}`} />
        </ButtonLink>
      </Link>
    </CategoryCard>
  );
};

export { CategoryLink };
