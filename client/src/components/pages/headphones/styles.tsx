import styled from 'styled-components';

export const ProductImage = styled.figure`
  img {
    border-radius: var(--size-200);
  }
`;
export const ProductBody = styled.div``;
export const ProductSection = styled.section`
  & > * {
    margin-block: 10rem;
  }
`;

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--product-card-gap, 4em);

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
