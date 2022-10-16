import {
  CategoryLinks,
  FlowChild,
  GlobalContainer,
  Showcase,
} from 'components';

const HomeTemplate = () => {
  return (
    <>
      <Showcase />
      <GlobalContainer
        id='main-content'
        as='main'
        aria-labelledby='home-heading'
        className='flow'
      >
        <FlowChild aria-label='Category Links' spacer='2rem'>
          <CategoryLinks />
        </FlowChild>

        <FlowChild aria-label='ZX9 Speaker' spacer='4rem'>
          {/* ZX9 Speaker */}
        </FlowChild>
        <FlowChild aria-label='ZX7 Speaker'>{/* ZX7 Speaker */}</FlowChild>
        <FlowChild aria-label='YX1 Earphones'>{/* YX1 Earphones */}</FlowChild>
        <FlowChild aria-label='Best Audio Gear'>
          {/* BEST AUDIO GEAR */}
        </FlowChild>
      </GlobalContainer>
    </>
  );
};

export { HomeTemplate };
