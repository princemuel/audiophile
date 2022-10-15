import { ArrowSVG } from 'common';
import { ButtonLink } from 'components';
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
        <img src={image} alt={title} />
      </figure>
      <h3 className='heading'>{title}</h3>
      <ButtonLink href={url}>
        <span>Shop</span>
        <img src={ArrowSVG} alt={`shop for ${title}`} />
      </ButtonLink>
    </CategoryCard>
  );
};

export { CategoryLink };
