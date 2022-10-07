import styled from 'styled-components';

export const ProductImage = styled.figure`
  img {
    border-radius: var(--size-200);
  }
`;

export const ProductBody = styled.div`
  --flow-space: 3rem;
`;

export const ProductSection = styled.section`
  & > * {
    margin-block: 10rem;
  }
`;

export const Product = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 65em) {
    flex-direction: row;
    gap: var(--product-card-gap, 4em);

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  & > * {
    flex-basis: 100%;
  }

  ${ProductImage} {
  }

  ${ProductBody} {
    align-self: center;

    @media (max-width: 65em) {
      text-align: center;
    }

    h2 {
      --flow-space: 1.6rem;

      display: flex;
      flex-direction: column;
    }
  }
`;
