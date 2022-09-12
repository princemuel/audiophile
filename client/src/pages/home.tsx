import { ArrowSVG, images } from '@src/common';
import {
  ButtonAccent,
  ButtonPrimary,
  ButtonSecondary,
  Hero,
} from '@src/components';
import { GlobalContainer } from '@src/styles';

type Props = {};

const Home = (props: Props) => {
  return (
    <GlobalContainer>
      <Hero />

      <main>
        <div>
          <p> Headphones</p>
          <ButtonAccent type='button'>Shop</ButtonAccent>
          <p>Speakers</p>
          <ButtonAccent type='button'>Shop</ButtonAccent>
          <p>Earphones</p>
          <ButtonAccent type='button'>
            <span>Shop</span>
            <img src={ArrowSVG} alt='' />
          </ButtonAccent>
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
          <ButtonSecondary type='button'>See product</ButtonSecondary>
        </div>
        <div>
          <h2>YX1 earphones</h2>
          <ButtonSecondary type='button'>See product</ButtonSecondary>
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
