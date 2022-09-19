import { ScreenReader } from '../typography';

type Props = {
  url: string;
  text: string;
};

const Avatar = ({ url, text }: Props) => {
  return (
    <figure>
      <img src={url} alt={text} />
      <ScreenReader>{text}</ScreenReader>
    </figure>
  );
};

export { Avatar };
