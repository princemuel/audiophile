import { GlobalContainer } from '@src/styles';
import { Outlet } from 'react-router-dom';

type Props = {};

const Main = (props: Props) => {
  return (
    <GlobalContainer id='main' as='main'>
      <Outlet />
    </GlobalContainer>
  );
};

export { Main };
