import React from "react";
import Layout from "./components/_App/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
