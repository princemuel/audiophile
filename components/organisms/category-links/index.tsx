import { links } from 'common';
import { CategoryLink } from 'components';
import { CategoryWrapper } from './styles';

const CategoryLinks = () => {
  return (
    <>
      <CategoryWrapper role='list'>
        {links.navigation.slice(1).map((link) => (
          <CategoryLink
            key={link.id}
            title={link.text}
            url={link.url}
            // @ts-expect-error
            image={link?.img}
          />
        ))}
      </CategoryWrapper>
    </>
  );
};

export { CategoryLinks };
