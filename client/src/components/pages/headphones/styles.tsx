import styled from 'styled-components';

export const ProductImage = styled.figure`
  border-radius: var(--size-200);
  overflow: hidden;
`;
export const ProductBody = styled.div``;

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--product-card-gap, 4rem);

  margin-block: 10rem;

  @media (min-width: 65em) {
    flex-direction: row;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  & > * {
    flex: 1;
    /* flex-basis: 100%; */
  }

  ${ProductImage} {
  }

  ${ProductBody} {
    align-self: center;
  }
`;
