import styled from 'styled-components';

export const CategoryCard = styled.article`
  --fs-heading: var(--fs-500);
  --b-radius: 8px;
  /* position: relative; */

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  border-radius: var(--b-radius);

  background-color: brown;

  figure {
    /* position: absolute; */
    width: 17.8rem;
  }
`;
