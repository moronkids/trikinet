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
  console.log("buat loading non useEffect")
  useEffect(() => {
    console.log("buat loading")
  }, []);
  return (
    <>
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
  };
}

export default Index;
