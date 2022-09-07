import { ArrowIcon, images } from '@src/common';
import { ButtonAccent, ButtonCTA, ButtonPrimary } from '@src/components';
import { GlobalContainer } from '@src/styles';

type Props = {};

const Home = (props: Props) => {
  return (
    <GlobalContainer>
      <div>
        {/* Showcase */}
        <h1 className='heading'>
          <span>New product</span>
          <span className='fs-xl'>XX99 Mark II Headphones</span>
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonPrimary type='button'>See product</ButtonPrimary>
      </div>

      <main>
        <div>
          <p> Headphones</p>
          <ButtonCTA type='button'>Shop</ButtonCTA>
          <p>Speakers</p>
          <ButtonCTA type='button'>Shop</ButtonCTA>
          <p>Earphones</p>
          <ButtonCTA type='button'>
            <span>Shop</span>
            <img src={ArrowIcon} alt='' />
          </ButtonCTA>
        </div>

        <div>
          <h2>ZX9 speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonPrimary type='button'>See product</ButtonPrimary>
        </div>

        <div>
          <h2>ZX7 speaker</h2>
          <ButtonAccent type='button'>See product</ButtonAccent>
        </div>
        <div>
          <h2>YX1 earphones</h2>
          <ButtonAccent type='button'>See product</ButtonAccent>
        </div>

        <div className=''>
          <section>
            <figure>
              <picture>
                <source
                  srcSet={images?.bestGear?.tablet}
                  media='(min-width: 45em)'
                />
                <source
                  srcSet={images?.bestGear?.desktop}
                  media='(min-width: 65em)'
                />
                <img src={images?.bestGear?.mobile} alt='Best Gear' />
              </picture>
            </figure>
            <h2 className='heading fs-700'>
              Bringing you the <span className='highlighted'>best</span> audio
              gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </section>
        </div>
      </main>
    </GlobalContainer>
  );
};

export { Home };
