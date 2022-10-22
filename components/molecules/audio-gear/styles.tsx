import { Heading, Text } from 'components/atoms';
import styled from 'styled-components';

export const AGArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (min-width: 40em) {
    gap: 5rem;
  }
  @media (min-width: 65em) {
    gap: 8rem;
    flex-direction: row-reverse;
  }

  & > * {
    flex: 1;
  }
`;

export const AGAvatar = styled.figure`
  img {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;

export const AGBody = styled.div`
  --mx-width: 40ch;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: var(--mx-width);
  margin-inline: auto;
  text-align: center;

  @media (min-width: 36em) {
    --mx-width: 60ch;
  }
  @media (min-width: 45em) {
    --mx-width: 70ch;
  }
  @media (min-width: 65em) {
    --mx-width: none;

    align-items: flex-start;
    justify-content: center;
    text-align: left;
  }
`;

export const AGHeadline = styled(Heading)`
  letter-spacing: 1.43px;
`;

export const AGDescription = styled(Text)``;
