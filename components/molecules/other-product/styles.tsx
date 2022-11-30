import { FlowChild, Heading } from 'components/atoms';
import styled from 'styled-components';

export const OtherProductItem = styled.article``;

export const OtherProductImage = styled.figure`
  img {
    width: 100%;
    border-radius: var(--b-radius);
  }
`;

export const OtherProductBody = styled(FlowChild)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const OtherProductName = styled(Heading)`
  margin-block-start: 1rem;
  letter-spacing: 1.43px;
`;
