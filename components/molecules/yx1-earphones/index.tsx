import { ButtonSecondary } from 'components/atoms';
import Link from 'next/link';
import { Body, Container, ImageContainer, Title } from './styles';

type Props = {};

const YX1Earphones = (props: Props) => {
  return (
    <Container>
      <ImageContainer />
      <Body>
        <Title as='h3' className='fs-xl leading-700 tracking-300 uppercase'>
          YX1 Earphones
        </Title>

        <Link href={`/earphones/yx1-earphones`} passHref>
          <ButtonSecondary as='a' className='uppercase'>
            See Product
          </ButtonSecondary>
        </Link>
      </Body>
    </Container>
  );
};

export { YX1Earphones };
