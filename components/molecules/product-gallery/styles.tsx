import { devices } from 'helpers';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-areas:
    'first'
    'second'
    'third'
    'third';
  gap: 2rem;

  @media ${devices?.tablet?.('min')} {
    grid-template-areas:
      'first third'
      'second third';
  }

  & > :nth-child(1) {
    grid-area: first;
  }
  & > :nth-child(2) {
    grid-area: second;
  }
  & > :nth-child(3) {
    grid-area: third;
  }

  img {
    min-height: 100%; // to fix image display issues in the grid
    border-radius: var(--b-radius);
  }
`;
