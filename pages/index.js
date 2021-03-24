import SearchContainers from "components/layouts/searchContainers";
import SectionNews from "components/homepage/newsSection";
import SectionNewsMobile from "components/homepage/newsSection/mobile";
import React, { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_NEWS_LATEST } from "redux/actions";
import defaultAxios from "axios";
import { useNewsLatestx } from "redux/api/news";
import Head from "next/head";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const Index = (props) => {

  useEffect(() => {

  }, []);
  return (
    <>
      <>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <title>Blog, Tips, dan Trik Internet | Trikinet.com</title>
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
        </Head>
        <Head>
          <meta property="og:title" content="My new title" key="title" />
        </Head>
        <>
          <SearchContainers />
          <SectionNews
            headlineLatestNews={props.headlineLatestNews}
            newsLatest={props.newsLatest}
            publishedDate={props.publishedDate}
          />
        </>
      </>
    </>
  );
};
// Index.getInitialProps = async ({ query }) => {
//   const { id } = query;
//   // alert(id)
//   return { id };
// };
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "latest" } }, // See the "paths" section below
    ],
    fallback: false, //or false // See the "fallback" section below
  };
}
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const fetch = await useNewsLatestx({});
  const newsLatest = fetch.newsLatest.status ? fetch.newsLatest.data : [];
  const headlineLatestNews = newsLatest[0];
  newsLatest.shift();
  let publishedDate;
  if (newsLatest.length > 0) publishedDate = dayjs(headlineLatestNews.date).fromNow(); // 20 years ago
  return {
    props: {
      newsLatest: newsLatest,
      headlineLatestNews: headlineLatestNews,
      publishedDate: publishedDate,
    },
    revalidate: 1, // In seconds
  };
}

export default Index;
