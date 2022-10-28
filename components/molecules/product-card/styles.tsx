import { Heading, Text } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const StyledVariantMap = {
  li: 'li',
  div: 'div',
} as const;

interface IProductListItem {
  as: keyof typeof StyledVariantMap;
  'data-direction': 'row' | 'row-reverse';
}

export const ProductListItem = styled.li<IProductListItem>`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media ${devices?.smartphone?.('min')} {
    gap: 5rem;
  }
  @media ${devices?.ipad?.('min')} {
    gap: 8rem;
    flex-direction: ${(props) => props['data-direction']};
  }

  & > * {
    flex: 1;
  }
`;

export const ProductImage = styled.figure`
  img {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  --mx-width: 40ch;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: var(--mx-width);
  margin-inline: auto;
  text-align: center;

  @media ${devices?.mobile?.('min')} {
    --mx-width: 60ch;
  }
  @media ${devices?.tablet?.('min')} {
    --mx-width: 70ch;
  }
  @media ${devices?.ipad?.('min')} {
    --mx-width: none;

    align-items: flex-start;
    justify-content: center;
    text-align: left;
  }
`;

export const ProductName = styled(Heading)`
  letter-spacing: 1.43px;
`;

export const ProductNew = styled(Text)``;

export const ProductDescription = styled(Text)`
  color: hsl(var(--clr-800) / 0.5);
`;
export const ProductPrice = styled(Text)``;
