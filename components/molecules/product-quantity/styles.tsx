import styled from 'styled-components';

type ContainerProps = {
  size?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  padding-block: ${(props) => props['size'] ?? '1.43rem'};
  padding-inline: 2rem;

  & button {
    color: hsl(var(--clr-800) / 0.25);
  }
`;
