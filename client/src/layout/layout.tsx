import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
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
    </Fragment>
  );
};

export { Layout };
