import dynamic from "next/dynamic";
import { LoaderStyles } from "@assets/styles/loader";
import "@assets/styles/scss/style.scss";

const Layout = dynamic(() => import("../components/Layout"));


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
