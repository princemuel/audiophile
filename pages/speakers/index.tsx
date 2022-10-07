type Props = {};

import { Layout } from 'components';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from 'types';
// import NestedLayout from '../components/nested-layout';

const Speakers: NextPageWithLayout = (props: Props) => {
  return <h1>Speakers</h1>;
};

Speakers.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
      {/* <NestedLayout>{page}</NestedLayout> */}
    </Layout>
  );
};

export default Speakers;
