import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

/* Component */
import Layout from "layout/Layout";
import { Loading } from "components/Loading";

/* Style */
import "~/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
