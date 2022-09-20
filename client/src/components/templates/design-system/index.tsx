import { GlobalContainer } from '../layout';
import { Grid, Heading } from './styles';

type Props = {};

const DesignSystem = (props: Props) => {
  return (
    <GlobalContainer>
      <Heading as='h1'>Design System</Heading>
      {/* DESIGN_SYSTEM: COLORS  */}
      <section id='colors' style={{ margin: '4rem 0' }}>
        <h2 className='numbered-title'>
          <span>01 </span>colors
        </h2>
        <Grid>
          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-dark text-white ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #D87D4A
            </div>
            <p>
              <span className='text-accent'>RGB</span> 11, 13, 23
            </p>
            <p>
              <span className='text-accent'>HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-accent text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #101010
            </div>
            <p>
              <span className='text-accent'>RGB</span> 208, 214, 249
            </p>
            <p>
              <span className='text-accent'>HSL</span> 231°, 77%, 90%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-white text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #F1F1F1
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0°, 0%, 100%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-white text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #FAFAFA
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0°, 0%, 100%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-white text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #FBAF85
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0°, 0%, 100%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-white text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #FFFFFF
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0°, 0%, 100%
            </p>
          </div>

          <div style={{ flexGrow: '1' }}>
            <div
              className='bg-white text-dark ff-serif fs-500'
              style={{ padding: '4.8rem 1.6rem', border: '1px solid white' }}
            >
              #000000
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </Grid>
      </section>
    </GlobalContainer>
  );
};

export { DesignSystem };
