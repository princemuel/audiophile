import styled from 'styled-components';

export const CategoryContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
