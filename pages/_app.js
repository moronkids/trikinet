import React, { createContext, useEffect, useState } from "react";
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
import NProgress from "nprogress";
import Router from "next/router";
// import "/styles/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

// Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, deviceType }) {
//   useEffect(() => {
// Router.events.on("routeChangeStart", () =>
//   }, [])

  return (
    <>
      <Container>
        <Provider store={store}>
          <AppWrapper>
            <Head>
              {" "}
              <link rel="manifest" href="/manifest.json" />
              <link rel="shortcut icon" href="/assets/favicon.png" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                crossorigin="anonymous"
              />
            </Head>
            <style jsx global>{`
              body {
                margin: 0px;
                padding: 0px;
                background: #f8f8f8 !important;
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-137491055-1"
      ></script>
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
