import { devices } from 'helpers';
import styled from 'styled-components';

export const CategoryWrapper = styled.ul`
  --item-gap: 5rem;

  display: flex;
  flex-direction: column;
  gap: var(--item-gap);

  @media ${devices?.mobile?.('min')} {
    --item-gap: 1rem;
    flex-direction: row;
  }
  @media ${devices?.ipad?.('min')} {
    --item-gap: 2rem;
    flex-direction: row;
  }
`;
