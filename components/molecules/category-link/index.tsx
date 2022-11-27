import { icons } from 'common';
import { Text } from 'components/atoms';
import Image from 'next/future/image';
import Link from 'next/link';
import { CategoryCard, CategoryImage, CategoryLinkCta } from './styles';

type Props = {
  title: string;
  url: string;
  image: string;
};

const CategoryLink = ({ title, url, image }: Props) => {
  return (
    <CategoryCard>
      <CategoryImage>
        <Image src={image} alt={title} width={'438'} height={'380'} />
      </CategoryImage>

      <Text className='fw-700 uppercase'>{title}</Text>

      <Link href={url} passHref>
        <CategoryLinkCta>
          <span>Shop</span>
          <icons.arrow.right />
        </CategoryLinkCta>
      </Link>
    </CategoryCard>
  );
};

export { CategoryLink };
