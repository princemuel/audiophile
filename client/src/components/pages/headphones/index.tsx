import {
  MarkTwoDesktopJPG,
  MarkTwoMobileJPG,
  MarkTwoTabletJPG,
} from '@src/common';
import {
  ButtonPrimary,
  GlobalContainer,
  Heading,
  HighlightedText,
  Text,
} from '@src/components';
import { Product, ProductBody, ProductImage, ProductSection } from './styles';

type Props = {};

const Headphones = (props: Props) => {
  return (
    <GlobalContainer as='main' aria-labelledby='headphones'>
      <Heading id='headphones' as='h1' className='fs-xl ls-4'>
        Headphones
      </Heading>

      <ProductSection>
        <Product as='article'>
          <picture>
            <source media='(min-width: 65em)' srcSet={MarkTwoDesktopJPG} />
            <source media='(min-width: 45em)' srcSet={MarkTwoTabletJPG} />
            <img src={MarkTwoMobileJPG} alt='XX99 Mark II Headphones' />
          </picture>

          <ProductBody className='flow'>
            <HighlightedText as='strong' className='fs-300 ls-7'>
              New product
            </HighlightedText>

            <Heading as='h2' className='fs-900 ls-4'>
              <Text as='span'>XX99 Mark II </Text>
              <Text as='span'>Headphones</Text>
            </Heading>

            <Text>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Text>
            <ButtonPrimary type='button'>See product</ButtonPrimary>
          </ProductBody>
        </Product>

        <Product as='article'>
          <ProductImage>
            <picture>
              <source media='(min-width: 45em)' srcSet={MarkTwoTabletJPG} />
              <source media='(min-width: 65em)' srcSet={MarkTwoDesktopJPG} />
              <img src={MarkTwoMobileJPG} alt='XX99 Mark II Headphones' />
            </picture>
          </ProductImage>

          <ProductBody className='flow'>
            <HighlightedText as='strong' className='fs-300 ls-7'>
              New product
            </HighlightedText>
            <Heading as='h2' className='fs-900 ls-4'>
              <Text as='span'>XX99 Mark II</Text>
              <Text as='span'>Headphones</Text>
            </Heading>
            <Text>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Text>
            <ButtonPrimary type='button'>See product</ButtonPrimary>
          </ProductBody>
        </Product>
      </ProductSection>
    </GlobalContainer>
  );
};

export { Headphones };
