import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='all' />
        {/* <meta name='color-scheme' content='dark light' /> */}
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='white'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='black'
        />
        <meta
          name='description'
          content='Get discounted on shipping for all items. Get the best of Shopping and Entertainment with Audiophile. Enjoy low prices and great deals on the largest selection of audio devices.'
        />
        <meta name='author' content='Prince Muel' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'true'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// To solve issues when using Styled Components in SSR
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};
