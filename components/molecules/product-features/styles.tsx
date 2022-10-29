import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const FeatureHeading = styled(Heading)``;
export const FeatureText = styled(Text)``;

export const FeatureContainer = styled.div`
  display: grid;
  row-gap: 10rem;

  @media ${devices?.ipad('min')} {
    grid-template-columns: repeat(6, minmax(10rem, 1fr));
    gap: 4rem;
  }
`;

interface ArticleProps {
  gap?: string;
}

export const FeaturedArticle = styled.article<ArticleProps>`
  display: grid;
  gap: ${(props) => props?.gap || '3rem'};
  --text-color: hsl(var(--clr-800) / 0.5);

  &:nth-of-type(1) {
    @media ${devices?.ipad('min')} {
      max-width: 66rem;
      grid-column: 1 / span 4;
    }
  }

  &:nth-of-type(2) {
    grid-column: 5 / -1;

    @media ${devices?.tablet?.('min')} and (max-width: 65em) {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`;

export const FeaturedItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const FeaturedItem = styled.p`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
