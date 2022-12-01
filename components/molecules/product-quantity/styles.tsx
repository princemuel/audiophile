import styled from 'styled-components';

type ContainerProps = {
  'data-block-size'?: string;
  'data-inline-size'?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  padding-block: ${(props) => props['data-block-size']};
  padding-inline: ${(props) => props['data-inline-size']};

  & button {
    color: hsl(var(--clr-800) / 0.25);
  }
`;
