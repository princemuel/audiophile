import {
  EarphonesDesktopPNG,
  HeadphonesDesktopPNG,
  SpeakersDesktopPNG,
} from '@src/common';
import { CategoryLink } from '../molecules';
import { CategoryContainer } from './styles';

type Props = {};

const CategoryLinks = (props: Props) => {
  return (
    <CategoryContainer>
      <CategoryLink
        image={HeadphonesDesktopPNG}
        title='Headphones'
        url='/headphones'
      />
      <CategoryLink
        image={SpeakersDesktopPNG}
        title='Speakers'
        url='/speakers'
      />
      <CategoryLink
        image={EarphonesDesktopPNG}
        title='Earphones'
        url='/earphones'
      />
    </CategoryContainer>
  );
};

export { CategoryLinks };
