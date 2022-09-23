import { ScreenReader } from '../typography';

type Props = {
  url: string;
  text: string;
};

const Avatar = ({ url, text }: Props) => {
  return (
    <span>
      <img src={url} alt={text} />
      <ScreenReader>{text}</ScreenReader>
    </span>
  );
};

export { Avatar };
