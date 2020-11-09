import '@assets/styles/scss/style.scss';
import "../../node_modules/aos/dist/aos.css"
import { LoaderStyles } from '@assets/styles/loader';
import Layout from "@components/Layout";


const App = ({ Component, pageProps }) => {
  const { layout } = pageProps;

  if (layout === false) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <LoaderStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
