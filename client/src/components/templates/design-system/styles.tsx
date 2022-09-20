import styled from 'styled-components';

export const Heading = styled.p``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: var(--gap, 1.6rem);
`;

// .flex-col {
//   flex-direction: column;
// }

// .flex.even-columns > * {
//   flex-basis: 100%;
//   outline: 1px solid palevioletred;
// }
