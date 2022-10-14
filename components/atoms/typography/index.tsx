import styled from 'styled-components';

interface TextProps {
  color?: string;
}

export const Text = styled.p<TextProps>`
  --text-color: ${(props) => props.color};
  color: var(--text-color);
`;

export const Heading = styled(Text)`
  font-family: var(--ff-heading);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  text-transform: uppercase;
`;

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

export const HighlightedText = styled(Heading)`
  --clr-highlight: var(--clr-primary-100);
  color: var(--clr-highlight);
`;
