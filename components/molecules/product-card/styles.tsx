import { Heading, Text } from 'components/atoms';
import styled from 'styled-components';

export const ProductListItem = styled.li`
  display: flex;
  column-gap: 10rem;
`;

export const ProductImage = styled.figure`
  img {
    border-radius: 0.8rem;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify: */
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
