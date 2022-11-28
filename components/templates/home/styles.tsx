import { FlowChild } from 'components/atoms';
import styled from 'styled-components';

export const SampleProducts = styled(FlowChild)`
  & > :not(:first-child) {
    --flow-space: 3rem;
    margin-block-start: var(--flow-space, 1.6rem);
  }
`;
