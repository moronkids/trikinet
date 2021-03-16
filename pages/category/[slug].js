import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import defaultAxios from "axios";
import SquareLoader from "components/layouts/contentLoader";
// import Web_ from "components/page_category";
import Router from "next/router";
import { sortByCategory } from "redux/api/news";
const Web_ = dynamic(() => import("components/page_category"), {
  loading: () => (
    <>
      <h1></h1>
    </>
  ),
});
import SearchContainers from "components/layouts/searchContainers";
import Head from "next/head";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { DO_LOADING } from "redux/actions";
const Web = ({
  headlineLatestNews_1,
  headlineLatestNews_2,
  newsLatest,
  category,
}) => {
  //   console.log("buat loading non useEffect");
  // const dispatch = useDispatch();
  // const { category_stat, loading_redux } = useSelector((state) => ({
  //   category_stat: state.category[category].status,
  //   loading_redux: state.loading.status,
  // }));
  // Router.events.on("routeChangeComplete", () => {
  //   console.log("tes complete");
  //   dispatch({ type: DO_LOADING, payload: false });
  // });
  // useEffect(() => {
  //   // alert("cek")
  //   // console.log("buat loading");
  //   // if(newsLatest.length > 0) {

  //   dispatch({ type: DO_LOADING, payload: true });
  //   // }
  //   // else {
  //   // dispatch({type: DO_LOADING, payload: true})

  //   // }
  //   return () => {};
  // }, [category]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 500);
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
      <Web_
        loading={loading}
        headlineLatestNews_1={headlineLatestNews_1}
        headlineLatestNews_2={headlineLatestNews_2}
        newsLatest={newsLatest}
        category= {category}
      />
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

  let headlineLatestNews_1;
  let headlineLatestNews_2;
  const axios = defaultAxios.create({
    baseURL: "https://venom.trikinet.com",
    headers: {
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Origin": "*",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    withCredentials: false,
    crossorigin: true,
  });
  const todos = await axios
    .get(`news/category/${category}?page=${1}&limit=${20}`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        console.log(error, "response failed");
        return {
          data : {
            statusCode : false,
            data: []
          }
        };
      }
    });
  console.log(todos, "khusus todos");
  // return {
  //   data: todos.data.data,
  //   status: todos.status,
  //   page: page,
  //   category: category,
  // };
  // console.log(fetchdata, "INI TODOSƒ");
  const newsLatest = await todos.data.statusCode ? todos.data.data : [];
  headlineLatestNews_1 = await newsLatest[0];
  headlineLatestNews_2 = await newsLatest[1];

  return {
    props: {
      headlineLatestNews_1,
      headlineLatestNews_2,
      newsLatest,
      category: params.slug,
    },
  };
}
export default Web;
