import { GlobalContainer } from '@src/styles';
import { Outlet } from 'react-router-dom';

type Props = {};

const Main = (props: Props) => {
  return (
    <GlobalContainer as='main'>
      <Outlet />
    </GlobalContainer>
  );
};

export { Main };
