import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  background: transparent;
  font: inherit;
  letter-spacing: var(--spacing);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus {
    outline: none;
  }
`;
