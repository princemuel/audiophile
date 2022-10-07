import { Footer, Header } from 'components';
import { Fragment, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export { Layout };
