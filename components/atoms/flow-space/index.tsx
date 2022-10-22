import styled from 'styled-components';

type FlowProps = {
  spacer?: string;
};

export const FlowChild = styled.section<FlowProps>`
  --flow-space: ${(props) => props.spacer};
`;
