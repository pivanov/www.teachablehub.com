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
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

          <style dangerouslySetInnerHTML={{ __html: `.async-hide #__next { opacity: 0; }` }} />
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KM5DSX6');`
          }} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180733216-1"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-180733216-1');
          `}} />
          <script type="text/javascript" src="https://www.googleoptimize.com/optimize.js?id=OPT-M2G4HWF"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="ba435729-3fe2-4678-962d-758aebbf52fa";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `
          }} />
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
