import { GlobalContainer, Heading, Text } from 'components';

const Showcase = () => {
  return (
    <>
      <GlobalContainer className='full-width'>
        <Text className='text-neutral-100 uppercase'>New Product</Text>

        <Heading id={'home-heading'} as='h1' className='fs-xl ls-4 uppercase'>
          <Text as='span'>XX99 Mark II </Text>
          <Text as='span'>Headphones</Text>
        </Heading>

        <Text>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
      </GlobalContainer>
    </>
  );
};

export { Showcase };
