import { FlowChild, GlobalContainer } from 'components/atoms';
import {
  BestAudioGear,
  Showcase,
  YX1Earphones,
  ZX7Speaker,
  ZX9Speaker,
} from 'components/molecules';
import { CategoryLinks } from 'components/organisms';
import { SampleProducts } from './styles';

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

        <SampleProducts spacer='4rem'>
          <ZX9Speaker aria-label='ZX9 Speaker' />
          <ZX7Speaker aria-label='ZX7 Speaker' />
          <YX1Earphones aria-label='YX1 Earphones' />
        </SampleProducts>

        <FlowChild aria-label='Best Audio Gear' spacer='10rem'>
          <BestAudioGear />
        </FlowChild>
      </GlobalContainer>
    </>
  );
};

export { HomeTemplate };
