import { GlobalContainer, Showcase } from 'components';

const HomeTemplate = () => {
  return (
    <>
      <Showcase />
      <GlobalContainer id='main-content' as='main'>
        {/* CATEGORY LINKS */}
        {/* BEST AUDIO GEAR */}
      </GlobalContainer>
    </>
  );
};

export { HomeTemplate };
