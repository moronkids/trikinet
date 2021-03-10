import SearchContainers from "components/layouts/searchContainers";
import SectionNews from "components/homepage/newsSection";
import SectionNewsMobile from "components/homepage/newsSection/mobile";
import React, { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_NEWS_LATEST } from "redux/actions";
import defaultAxios from "axios";
import Head from "next/head";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const Index = (props) => {
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
        {props.device ? (
          <>
            <SectionNewsMobile
              headlineLatestNews={props.headlineLatestNews}
              newsLatest={props.newsLatest}
              publishedDate={props.publishedDate}
            />
          </>
        ) : (
          <>
            <SearchContainers />
            <SectionNews
              headlineLatestNews={props.headlineLatestNews}
              newsLatest={props.newsLatest}
              publishedDate={props.publishedDate}
            />
          </>
        )}

        {/* <SectionTipsTrik/> */}
      </>
    </>
  );
}
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

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
    .get("news/latest?page=1&limit=16")
    .catch(function (error) {
      if (error.response.status !== 200) {
        // console.log(error, "response failed");
        return {
          status: "failed",
        };
      }
    });
  const newsLatest = todos.data.data;
  const headlineLatestNews = newsLatest[0];
  newsLatest.shift();

  let publishedDate;
  if (newsLatest.length > 0)
    publishedDate = dayjs(headlineLatestNews.date).fromNow(); // 20 years ago
  return {
    props: {
      newsLatest: newsLatest,
      headlineLatestNews: headlineLatestNews,
      publishedDate: publishedDate,
    },
  };
};
export default Index;
