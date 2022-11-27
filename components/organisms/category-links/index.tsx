import { links } from 'common';
import { CategoryLink } from 'components/molecules';
import { CategoryWrapper } from './styles';

type Props = {
  label?: string;
};
const CategoryLinks = ({ label }: Props) => {
  return (
    <>
      <CategoryWrapper aria-label={label ?? ''} role='list'>
        {links?.navigation?.slice(1).map((link) => (
          <CategoryLink
            key={link.id}
            title={link.text}
            url={link.url}
            image={link?.img}
          />
        ))}
      </CategoryWrapper>
    </>
  );
};

export { CategoryLinks };
