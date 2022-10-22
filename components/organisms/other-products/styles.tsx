import styled from 'styled-components';

export const OtherProductsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 40em) {
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;
