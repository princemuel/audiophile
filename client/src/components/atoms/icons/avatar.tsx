import { ScreenReader } from '../typography';

type Props = {
  url: string;
  text: string;
  classes?: string;
};

const Avatar = ({ url, text, classes }: Props) => {
  return (
    <span>
      <img className={classes ?? ''} src={url} alt={text} />
      <ScreenReader>{text}</ScreenReader>
    </span>
  );
};

export { Avatar };
