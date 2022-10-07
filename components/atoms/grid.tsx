import { GlobalContainer } from 'components';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <GlobalContainer>
      <Content>{children}</Content>
    </GlobalContainer>
  );
};

export { Grid };

const Container = styled.section`
  margin-block: 3rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4em;
`;
