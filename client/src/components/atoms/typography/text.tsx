import styled from 'styled-components';

export const Heading = styled.h1``;

export const Text = styled.p``;

export const ScreenReader = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: none;
  white-space: nowrap;
  border: 0;
`;

export const Accented = styled.span`
  --clr-highlight: var(--clr-primary-100);
  color: var(--clr-highlight);
`;
