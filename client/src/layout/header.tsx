import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../common';
import { GlobalContainer } from '../styles';
import { capitalize } from '../utils';

type Props = {};

const Header = (props: Props) => {
  let location = useLocation();

  return (
    <GlobalContainer as='header'>
      <nav className='full-width'>
        <ul>
          {Object.keys(links?.navigation).map((key) => (
            <li key={key}>
              <NavLink to={key}>{capitalize(key)}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      key
    </GlobalContainer>
  );
};

export { Header };
