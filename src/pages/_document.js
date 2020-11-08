import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '@components/PrismicScript';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html id="html" className="async-hide">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700,900" rel="stylesheet" />
          <script async type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-180733216-1"></script>
          <script type="text/javascript" src="https://www.googleoptimize.com/optimize.js?id=OPT-TQZ7B87"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "UA-180733216-1");
          ` }} />
        </Head>
        <body onLoad={this.onLoad}>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
