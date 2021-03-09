import React from "react";
import Web_ from "components/page_category";
import SearchContainers from "components/layouts/searchContainers";
const Web = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#90cdf4" />
        <meta
          name="description"
          content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."
        ></meta>
        <title>Home</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <SearchContainers />
      <Web_ />
    </>
  );
};

export default Web;
