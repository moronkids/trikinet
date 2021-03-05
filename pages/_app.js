import React, { createContext } from "react";
import "../styles/scss/styles.scss";
import HeadersWeb from "components/layouts/headers/headers";
import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";
import { Hooks } from "providers/hooks";
function MyApp({ Component, pageProps, isMobileView }) {
  return (
    <>
      <Hooks>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
        {isMobileView ? (
          <>
            <HeadersMobile />
            <Body>
              <Component device={isMobileView} {...pageProps} />
            </Body>
            <Footers />
          </>
        ) : (
          <>
            <HeadersWeb />
            <Body>
              <Component device={isMobileView} {...pageProps} />
            </Body>
            <Footers />
          </>
        )}
      </Hooks>
    </>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default MyApp
