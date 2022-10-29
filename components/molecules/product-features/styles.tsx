import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const FeatureHeading = styled(Heading)``;
export const FeatureText = styled(Text)``;

export const FeatureContainer = styled.div`
  display: grid;
  gap: 10rem;

  @media ${devices?.ipad('min')} {
    grid-template-columns: repeat(3, minmax(35rem, 1fr));
    gap: 6rem;
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
      grid-column: 1 / span 2;
    }
  }

  &:nth-of-type(2) {
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
