import styled from 'styled-components';

export const EvenColumns = styled.div`
  display: grid;
  gap: var(--gap, 1rem);

  @media (min-width: 65em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;
