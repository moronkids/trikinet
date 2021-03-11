import React, { useEffect } from "react";
import dynamic from "next/dynamic"
import SquareLoader from "components/layouts/contentLoader";
// import Web_ from "components/page_category";
const Web_ = dynamic(() => import("components/page_category"), {
  loading: () => (
    <>
      <h1>JINGANn...</h1>
    </>
  ),
});
import SearchContainers from "components/layouts/searchContainers";
import Head from "next/head";
import defaultAxios from "axios";
import { useRouter } from "next/router";
const Web = ({ headlineLatestNews_1, headlineLatestNews_2, newsLatest, category }) => {
  useEffect(() => {
    alert("cek")
    return () => {

    };
  }, [category]);
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
      <Web_ headlineLatestNews_1={headlineLatestNews_1} headlineLatestNews_2={headlineLatestNews_2} newsLatest={newsLatest}/>
    </>
  );
};
export async function getStaticPaths() {
  // const router = useRouter();
  // const { slug } = router.query;
  return {
    paths: [
      { params: { slug: "internet" } }, // See the "paths" section below
      { params: { slug: "mobile" } }, // See the "paths" section below
      { params: { slug: "web" } }, // See the "paths" section below
      { params: { slug: "pc" } }, // See the "paths" section below
    ],
    fallback: true, //or false // See the "fallback" section below
  };
}
export async function getStaticProps({ params }) {
  const category = params.slug;
  // const page = data[1] !== null ? data[1] : 1;
  // const limit = data[2] !== null ? data[2] : 20;
  const axios = defaultAxios.create({
    baseURL: "https://venom.trikinet.com",
    headers: {
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: false,
    crossorigin: true,
  });
  const todos = await axios
    .get(`news/category/${category}?page=1&limit=20`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        return {
          status: "failed",
        };
      }
    });
  let headlineLatestNews_1;
  let headlineLatestNews_2;
  let newsLatest = todos.data.data
  headlineLatestNews_1 = newsLatest[0];
  headlineLatestNews_2 = newsLatest[1];

  return {
    props: {
      headlineLatestNews_1,
      headlineLatestNews_2,
      newsLatest,
      category : params
    },
  };
}
export default Web;
