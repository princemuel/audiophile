import { Footer, Header } from 'components';
import { Fragment } from 'react';
import { GlobalStyle } from 'styles';

type Props = {};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
};

export { Layout };
