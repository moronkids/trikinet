import "../styles/scss/styles.scss";
import Headers from "components/layouts/headers/headers";
import Footers from "components/layouts/footers/footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Component {...pageProps} />
      <Footers />
    </>
  );
}