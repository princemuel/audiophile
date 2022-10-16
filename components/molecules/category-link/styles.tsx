import { ButtonLink } from 'components';
import styled from 'styled-components';

export const CategoryCard = styled.li`
  position: relative;
  flex: 1;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  gap: 1.2rem;
  padding-block: 7rem 3rem;
  border-radius: 0.5rem;
  background: lightgray;
  cursor: pointer;

  @media (min-width: 45em) {
    padding-block: 8rem 3rem;
  }
`;

export const CategoryImage = styled.figure`
  position: absolute;
  top: -30%;

  width: 12rem;
  aspect-ratio: 1;
  @media (min-width: 45em) {
    top: -25%;
    width: 14rem;
  }
`;

export const CategoryLinkBtn = styled(ButtonLink)`
  background: transparent;
`;
