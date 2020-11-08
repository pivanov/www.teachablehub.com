import '@assets/styles/scss/style.scss';
import "../../node_modules/aos/dist/aos.css"

import Layout from "@components/Layout"
import PageLoading from "@components/PageLoading"


const App = ({ Component, pageProps }) => {
  const { layout } = pageProps;

  if (layout === false) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <PageLoading />
    </>
  );
};

export default App;
