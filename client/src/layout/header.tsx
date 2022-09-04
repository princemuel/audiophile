import { links } from '@src/common';
import { GlobalContainer } from '@src/styles';
import { NavLink } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  return (
    <GlobalContainer as='header'>
      <nav className='full-width'>
        <ul>
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
