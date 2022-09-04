import { Fragment } from 'react';
import { GlobalStyle } from '../styles';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main-page';

type Props = {};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
};

export { Layout };