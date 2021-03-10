import React, { useState } from "react";
import dynamic from "next/dynamic";
// import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";

import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HIT_CATEGORY_NEWS } from "../../redux/actions";
import { useRouter } from "next/router";
import SquareLoader from "components/layouts/contentLoader";
import LoaderSmallArticle from "components/layouts/contentLoader/loader";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();

const JINGAN = dynamic(
  () =>
    import("components/homepage/newsSection/mobile/articleContainerBig/bro.js"),
  { loading: () => "tes" }
);
const ArticleBig = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerBig"),
  { loading: () => <><SquareLoader/></> }
);

const Web = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const { newsLatest, loading } = useSelector((state) => ({
    newsLatest: state.news.category[slug].data,
    loading: state.loading.status,
  }));
  useEffect(() => {
    dispatch({ type: HIT_CATEGORY_NEWS, payload: [slug, null, null] });
    const section = document.querySelector("#category");
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  }, [slug]);

  let headlineLatestNews_1;
  let headlineLatestNews_2;
  let articleBig;
  let boxTitle;
  let ArticleSmall_1;
  let ArticleSmall_2;
  let ArticleSmall_3;
  let truncate = 3;
  let stopLoading = false;
  headlineLatestNews_1 = newsLatest[0];
  headlineLatestNews_2 = newsLatest[1];
  const calculateNews = async () => {
    const newsLatest_ = [...newsLatest];
    newsLatest_.splice(0, 2);
    let publishedDate_1;
    let publishedDate_2;
    if (newsLatest_.length > 0)
      publishedDate_1 = dayjs(headlineLatestNews_1.date).fromNow();
    const chunk = function (array, size) {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);

      return [head, ...chunk(tail, size)];
    };
    const reStructure =
      newsLatest_ && chunk(newsLatest_, newsLatest_.length / 3);
    const newsImagePhoto = {
      width: "inherit",
    };

    if (reStructure.length > 0) {
      ArticleSmall_1 = reStructure[0].map((val, i) => {
        return (
          <>
            <ArticleSmall
              data={val}
              image={newsImagePhoto}
              truncatex={truncate}
            />
          </>
        );
      });
      ArticleSmall_2 = reStructure[1].map((val, i) => {
        return (
          <>
            <ArticleSmall
              data={val}
              image={newsImagePhoto}
              truncatex={truncate}
            />
          </>
        );
      });
      ArticleSmall_3 = reStructure[2].map((val, i) => {
        return (
          <>
            <ArticleSmall
              data={val}
              image={newsImagePhoto}
              truncatex={truncate}
            />
          </>
        );
      });
    }
    else {
      let Articlex = []
      for (let index = 1; index < 8; index++) {
        Articlex.push(<><LoaderSmallArticle/></>)

      }
      ArticleSmall_1 = Articlex
      ArticleSmall_2 = Articlex
      ArticleSmall_3 = Articlex
    }

    articleBig = {
      height: "400px",
    };
    boxTitle = {
      height: "30%",
      width: "75%",
    };
  };
  calculateNews();
  // if (loading === true) {

  // } else {

  // }
  const [detail, setDetails] = useState(false);
  return (
    <>
      <div className="" style={{ height: "70px" }} id="category"></div>
      <div className="container" id="category">
        <div className="row col-12 news m-0 ">
          <div className="col-12 col-sm-6">
            {loading ? (
              <SquareLoader />
            ) : (
              <ArticleBig
                data={headlineLatestNews_1}
                articleBig={articleBig}
                boxTitle={boxTitle}
              />
            )}
          </div>
          <div className="col-12 col-sm-6">
            {loading ? (
              <SquareLoader />
            ) : (
              <ArticleBig
                data={headlineLatestNews_2}
                articleBig={articleBig}
                boxTitle={boxTitle}
              />
            )}
          </div>
        </div>
        <div className="row col-12 news m-0 ">
          <div className="col-sm-4 col-12">{loading ? <><LoaderSmallArticle/></>: ArticleSmall_1}</div>
          <div className="col-sm-4 col-12">{loading ? <><LoaderSmallArticle/></>: ArticleSmall_2}</div>
          <div className="col-sm-4 col-12">{loading ? <><LoaderSmallArticle/></>: ArticleSmall_3}</div>

        </div>
      </div>
    </>
  );
};

export default Web;
