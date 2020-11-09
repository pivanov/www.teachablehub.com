import Document, { Html, Head, Main, NextScript } from "next/document";
import PageLoading from "@components/PageLoading";
import PrismicScript from "@components/PrismicScript";

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
          <style dangerouslySetInnerHTML={{ __html: `.async-hide #__next { opacity: 0; }` }} />
          <script dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l] = w[l] || []{'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KM5DSX6');
          `}}></script>
          <script src="https://www.googleoptimize.com/optimize.js?id=OPT-M2G4HWF"></script>
          <script type="text/javascript" src="https://www.googleoptimize.com/optimize.js?id=OPT-TQZ7B87"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "UA-180733216-1");
          ` }} />
        </Head>
        <body>
          <Main />
          <PageLoading />
          <NextScript />
          <PrismicScript />

        </body>
      </Html >
    )
  }
}

export default MyDocument;
