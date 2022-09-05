import { links } from '@src/common';
import { GlobalContainer } from '@src/styles';
import { NavLink } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  return (
    <GlobalContainer as='header'>
      <nav aria-label='primary'>
        <ul id='primary-navigation' data-visible='false'>
          {Object.values(links?.navigation).map((value) => (
            <li key={value}>
              <NavLink to={value}>{value.toUpperCase()}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </GlobalContainer>
  );
};

export { Header };
