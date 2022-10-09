import styled from 'styled-components';

export const GlobalOverlay = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  inset: 0;
  width: min(90%, 110rem);
  height: min-content;
  margin-inline: auto;
  /* padding-inline: var(--spacer, 2em); */
  box-shadow: 0 0 0 100vmax rgb(0 0 0 / 0.5), 0 0 2rem rgb(0 0 0 / 0.5);

  &[data-visible='true'] {
    display: block;
  }
`;
