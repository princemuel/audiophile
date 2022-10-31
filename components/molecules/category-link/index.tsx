import { ArrowSVG } from 'common';
import { Text } from 'components/atoms';
import Image from 'next/future/image';
import Link from 'next/link';
import { CategoryCard, CategoryImage, CategoryLinkBtn } from './styles';

type Props = {
  title: string;
  url: string;
  image: string;
};

const CategoryLink = ({ title, url, image }: Props) => {
  return (
    <CategoryCard>
      <CategoryImage>
        <Image src={image} alt={title} width='400' height={'400'} />
      </CategoryImage>

      <Text className='fw-700 uppercase'>{title}</Text>

      <Link href={url} passHref>
        <CategoryLinkBtn>
          <span>Shop</span>
          <ArrowSVG />
        </CategoryLinkBtn>
      </Link>
    </CategoryCard>
  );
};

export { CategoryLink };
