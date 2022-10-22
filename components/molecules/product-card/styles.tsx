import { Heading, Text } from 'components/atoms';
import styled from 'styled-components';

interface IProductListItem {
  'data-direction': 'row' | 'row-reverse';
}

export const ProductListItem = styled.li<IProductListItem>`
  --list-gap: 4rem;

  display: flex;
  flex-direction: column;
  /* display: grid; */
  gap: var(--list-gap);

  & > * {
    flex: 1;
  }

  @media (min-width: 40em) {
    --list-gap: 5rem;
  }

  @media (min-width: 65em) {
    --list-gap: 8rem;
    flex-direction: ${(props) => props['data-direction']};

    /* grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr)); */
  }
`;

export const ProductImage = styled.figure`
  img {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  --mx-width: 40ch;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: var(--mx-width);
  margin-inline: auto;
  text-align: center;

  @media (min-width: 36em) {
    --mx-width: 60ch;
  }
  @media (min-width: 45em) {
    --mx-width: 70ch;
  }
  @media (min-width: 65em) {
    align-items: flex-start;
    justify-content: center;
    text-align: left;
  }
`;

export const ProductName = styled(Heading)``;
export const ProductNew = styled(Text)``;

export const ProductDescription = styled(Text)`
  color: hsl(var(--clr-800) / 0.5);
`;

// export const Product = styled.article`
//   display: flex;
//   flex-direction: column;

//   @media (min-width: 65em) {
//     flex-direction: row;
//     gap: var(--product-card-gap, 4em);

//     &:nth-of-type(even) {
//       flex-direction: row-reverse;
//     }
//   }

//   & > * {
//     flex-basis: 100%;
//   }

//   ${ProductImage} {
//   }

//   ${ProductBody} {
//     align-self: center;

//     @media (max-width: 65em) {
//       text-align: center;
//     }

//     h2 {
//       --flow-space: 1.6rem;

//       display: flex;
//       flex-direction: column;
//     }
//   }
// `;
