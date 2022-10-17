import { Text } from 'components';
import { useRouter } from 'next/router';
import {
  AdvertText,
  ShowcaseContainer,
  ShowcaseGrid,
  ShowcaseHeading,
} from './styles';

const Showcase = () => {
  const { asPath } = useRouter();

  return (
    <>
      <ShowcaseContainer isHome={asPath === '/'}>
        <ShowcaseGrid isHome={asPath === '/'}>
          <AdvertText className='fs-300 leading-100 tracking-700 uppercase'>
            New Product
          </AdvertText>
          <ShowcaseHeading
            id={'home-heading'}
            as='h1'
            className='fw-700 uppercase'
          >
            <Text as='span' className='text-neutral-100 tracking-300'>
              XX99 Mark II
            </Text>
            <Text as='span' className='text-neutral-100 tracking-300'>
              Headphones
            </Text>
          </ShowcaseHeading>
          <Text as='span' className='text-neutral-100 leading-300'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
        </ShowcaseGrid>
      </ShowcaseContainer>
    </>
  );
};

export { Showcase };
