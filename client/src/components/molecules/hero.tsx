import { ButtonPrimary } from '../atoms';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1 className='heading'>
        <strong>New product</strong>
        <span className='fs-xl'>XX99 Mark II Headphones</span>
      </h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <ButtonPrimary type='button'>See product</ButtonPrimary>
    </div>
  );
};

export { Hero };
