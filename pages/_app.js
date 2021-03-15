import React, { createContext, useState } from "react";
import App from "next/app";
import "../styles/scss/styles.scss";
import HeadersWeb from "components/layouts/headers/headers";
import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";
//redux
import { Provider, useDispatch } from "react-redux";
import { store } from "redux/index";
import { AppWrapper } from "providers/hooks";
import Head from "next/head";
import Sidebar from "components/mobile/layouts/sidebar";
import Router from "next/router";
// import NProgress from "nprogress";
// import Router from "next/router";

function MyApp({ Component, pageProps, deviceType }) {

  return (
    <>
      <Provider store={store}>
        <AppWrapper>
          <Head>
            {" "}
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <style jsx global>{`
            body {
              margin: 0px;
              padding: 0px;
            }
          `}</style>
          {/* <HeadersMobile /> */}
          <>
            <HeadersWeb />
          </>
          <>
            <HeadersMobile />
          </>

          <Body>
            <Component
              device={deviceType}
              {...pageProps}
              // loading={loading}
            />
          </Body>
          <Footers />
        </AppWrapper>
      </Provider>
    </>
  );
}

// export async function getInitialProps({ctx}) {
//   const UA = ctx.req.headers["user-agent"];
//   const isMobile = Boolean(
//     UA.match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     )
//   );
//   return {
//     props: {
//       deviceType: isMobile ? "mobile" : "desktop",
//     },
//   };
// }

export default MyApp;
