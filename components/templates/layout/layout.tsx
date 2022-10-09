import { Footer, Header } from 'components';
import { Fragment, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main id='main-content'>{children}</main>
      <Footer />
    </Fragment>
  );
};

export { Layout };
