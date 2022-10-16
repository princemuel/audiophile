import styled from 'styled-components';

export const CategoryWrapper = styled.ul`
  --item-gap: 5rem;

  display: flex;
  flex-direction: column;
  gap: var(--item-gap);

  @media (min-width: 36em) {
    --item-gap: 1rem;
    flex-direction: row;
  }
  @media (min-width: 65em) {
    --item-gap: 2rem;
    flex-direction: row;
  }
`;
