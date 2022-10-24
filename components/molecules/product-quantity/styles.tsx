import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (min-width: 40em) {
    gap: 5rem;
  }

  & > * {
    flex: 1;
  }
`;
