import { GlobalStyle } from '@src/styles';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../organisms/footer';
import { Header } from '../organisms/header';

type Props = {};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
};

export { Layout };
