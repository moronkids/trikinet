import React, { createContext, useState } from "react";
import App, { Container } from "next/app";
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
// import NProgress from "nprogress";
import Router from "next/router";
import Loader from "components/layouts/contentLoader/loader";
Router.events.on("routeChangeStart", () => {
  return (
    <>
      <Loader />
    </>
  );
});
Router.events.on("routeChangeComplete", () => {
  return (
    <>
      <Loader />
    </>
  );
});
function MyApp({ Component, pageProps, deviceType }) {
  // Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <>
      <Container>
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
              .infinite-scroll-component__outerdiv {
                width: 100%;
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
      </Container>
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
