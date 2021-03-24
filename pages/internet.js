import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import defaultAxios from "axios";
import SquareLoader from "components/layouts/contentLoader";
// import Web_ from "components/page_category";
import Router from "next/router";
import { sortByCategory_ } from "redux/api/news";
import Loader from "components/layouts/contentLoader/loader";
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
  const router = useRouter();
  const { slug } = router.query;
  console.log(newsLatest, "ceki")
  //
  // const dispatch = useDispatch();
  // const { category_stat, loading_redux } = useSelector((state) => ({
  //   category_stat: state.category[category].status,
  //   loading_redux: state.loading.status,
  // }));
  // Router.events.on("routeChangeComplete", () => {
  //
  //   dispatch({ type: DO_LOADING, payload: false });
  // });
  // useEffect(() => {
  //   // alert("cek")
  //   //
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
        <meta
          property="og:title"
          content="Blog, Tips, dan Trik Internet | Trikinet.com"
        />
        <meta
          property="og:image"
          content="https://trikinet.com/assets/img/logo-trickynet.png"
        />
        <meta
          property="og:description"
          content="Trikinet adalah sister site yang dikembangkan oleh tim yang ada di DailySocial.id. Trikinet merupakan kepanjangan dari 'trik dan tips internet', blog yang berisi panduan untuk mereka yang ingin mendapatkan trik dan tips seputar internet. Mulai dari web, PC, mobile sampai media sosial."
        />
        <meta
          name="description"
          content="Trikinet adalah sister site yang dikembangkan oleh tim yang ada di DailySocial.id. Trikinet merupakan kepanjangan dari 'trik dan tips internet', blog yang berisi panduan untuk mereka yang ingin mendapatkan trik dan tips seputar internet. Mulai dari web, PC, mobile sampai media sosial."
        />
        <title style={{ textTransform: "capitalize" }}>
          {category.charAt(0).toUpperCase() + category.slice(1)} | Trikinet
        </title>
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
        category={category}
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
  let headlineLatestNews_1;
  let headlineLatestNews_2;
  const todos = await sortByCategory_('internet')
  const newsLatest = await todos.data.data;
  console.log(newsLatest, "jigur")
  headlineLatestNews_1 = await newsLatest[0];
  headlineLatestNews_2 = await newsLatest[1];

  return {
    props: {
      headlineLatestNews_1,
      headlineLatestNews_2,
      newsLatest,
      category: "internet",
    },
    revalidate: 1, // In seconds
  };
}
export default Web;
