import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";

import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("jquery/dist/jquery");
    import("popper.js/dist/popper");
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
