import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../styles';
import { Footer } from './footer';
import { Header } from './header';

type Props = {};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
};

export { Layout };
