import { ButtonSecondary } from 'components/atoms';
import Link from 'next/link';
import { Body, Container, Title } from './styles';

type Props = {};

const ZX7Speaker = (props: Props) => {
  return (
    <Container>
      <Body>
        <Title as='h3' className='fs-700 tracking-300 uppercase'>
          ZX7 Speaker
        </Title>

        <Link href={`/speakers/zx7-speaker`} passHref>
          <ButtonSecondary as='a' className='uppercase'>
            See Product
          </ButtonSecondary>
        </Link>
      </Body>
    </Container>
  );
};

export { ZX7Speaker };
