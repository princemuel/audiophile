import { Outlet } from 'react-router-dom';
import { GlobalContainer } from '../styles';

type Props = {};

const Main = (props: Props) => {
  return (
    <GlobalContainer as='main'>
      <Outlet />
    </GlobalContainer>
  );
};

export { Main };
