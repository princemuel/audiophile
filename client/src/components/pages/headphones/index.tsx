import {
  Avatar,
  ButtonPrimary,
  GlobalContainer,
  Heading,
  HighlightedText,
  Text,
} from '@src/components';
import { Product } from './styles';

type Props = {};

const Headphones = (props: Props) => {
  return (
    <GlobalContainer>
      <Product>
        <figure>
          <Avatar url={''} text={''} />
        </figure>

        <div className='flow'>
          <HighlightedText className='fs-300 ls-7'>New product</HighlightedText>
          <Heading as='h2' className='fs-900 ls-4'>
            XX99 Mark II Headphones
          </Heading>
          <Text>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </Text>
          <ButtonPrimary>See product</ButtonPrimary>
        </div>
      </Product>
    </GlobalContainer>
  );
};

export { Headphones };
