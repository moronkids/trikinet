import "../styles/scss/styles.scss";
import Headers from "components/layouts/headers/headers";
import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";

function MyApp({ Component, pageProps, isMobileView }) {
  console.log(isMobileView, "device");
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      {isMobileView ? <HeadersMobile/> : <Headers /> }

      <Body>
        <Component {...pageProps} />
      </Body>
      <Footers />
    </>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default MyApp
