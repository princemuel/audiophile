import { links } from 'common';
import { CategoryLink } from 'components';

const CategoryLinks = () => {
  return (
    <>
      {links.navigation.slice(1).map((link) => (
        <CategoryLink
          key={link.id}
          title={link.text}
          url={link.url}
          // @ts-expect-error
          image={link?.img}
        />
      ))}
    </>
  );
};

export { CategoryLinks };
