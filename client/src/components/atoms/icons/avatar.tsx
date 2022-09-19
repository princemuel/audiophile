type Props = {
  url: string;
  text: string;
};

const Avatar = ({ url, text }: Props) => {
  return (
    <figure>
      <img src={url} alt={text} />
      <span className='sr-only'>{text}</span>
    </figure>
  );
};

export { Avatar };
