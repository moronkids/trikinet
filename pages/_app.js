import "../styles/scss/styles.scss";
import Headers from "components/layouts/headers/headers";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Component {...pageProps} />
    </>
  );
}