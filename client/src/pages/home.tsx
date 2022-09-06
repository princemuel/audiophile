type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <header>
        <h1>
          <span>New product</span>
          <span>XX99 Mark II Headphones</span>
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>See product</button>
      </header>

      <main>
        <div>
          <p> Headphones</p>
          <button>Shop</button>
          <p>Speakers</p>
          <button>Shop</button>
          <p>Earphones</p>
          <button>Shop</button>
        </div>

        <div>
          <h2>ZX9 speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button>See product</button>
        </div>

        <div>
          <h2>ZX7 speaker</h2>
          <button>See product</button>
        </div>
        <div>
          <h2>YX1 earphones</h2>
          <button>See product</button>
        </div>

        <div>
          <h2>Bringing you the best audio gear</h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </main>
    </div>
  );
};

export { Home };
