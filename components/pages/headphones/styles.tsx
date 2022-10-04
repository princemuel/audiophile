import styled from 'styled-components';

export const ProductImage = styled.figure`
  img {
    border-radius: var(--size-200);
  }
`;

export const ProductBody = styled.div`
  --flow-space: 3rem;

  @media (max-width: 65em) {
    text-align: center;
  }

  h2 {
    --flow-space: 1.6rem;

    display: flex;
    flex-direction: column;
  }
`;

export const ProductSection = styled.section`
  & > * {
    margin-block: 10rem;
  }
`;

export const Product = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);

  & > picture,
  & > img {
    grid-row: 1 / span 1;
  }

  ${ProductBody} {
    grid-row: 2 / span 1;
  }
`;
