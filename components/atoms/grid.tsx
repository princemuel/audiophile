import { GlobalContainer } from 'components/atoms';
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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  gap: var(--gap, 1em);
`;
