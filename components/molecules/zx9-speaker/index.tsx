import { ButtonSecondary, Text } from 'components/atoms';
import Image from 'next/future/image';
import Link from 'next/link';
import { Body, Container, Description, ImageContainer, Title } from './styles';

type Props = {};

const ZX9Speaker = (props: Props) => {
  return (
    <Container>
      <ImageContainer>
        <picture>
          <source
            media='(min-width: 65em)'
            srcSet={'/assets/home/desktop/image-speaker-zx9.png'}
          />
          <source
            media='(min-width: 40em)'
            srcSet={'/assets/home/tablet/image-speaker-zx9.png'}
          />
          <source srcSet={'/assets/home/mobile/image-speaker-zx9.png'} />
          <Image
            src={'/assets/home/mobile/image-speaker-zx9.png'}
            width='540'
            height='680'
            alt={' zx9 speaker'}
          />
        </picture>
      </ImageContainer>

      <Body>
        <Title as='h3' className='uppercase'>
          <Text as='span' className='text-neutral-100 tracking-300'>
            ZX9
          </Text>
          <br />
          <Text as='span' className='text-neutral-100 tracking-300'>
            Speaker
          </Text>
        </Title>

        <Description className='text-neutral-100'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Description>

        <Link href={`/speakers/zx9-speaker`} passHref>
          <ButtonSecondary as='a' className='uppercase' data-inverted={true}>
            See Product
          </ButtonSecondary>
        </Link>
      </Body>
    </Container>
  );
};

export { ZX9Speaker };
