import React from "react";
import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";
import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HIT_CATEGORY_NEWS } from "../../redux/actions";
import { useRouter } from "next/router";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const Web = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const { newsLatest, loading } = useSelector((state) => ({
    newsLatest: state.news.category[slug].data,
    loading: state.loading.status
  }));
  useEffect(() => {
    dispatch({ type: HIT_CATEGORY_NEWS, payload: [slug, null, null] });
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
  headlineLatestNews_1 =  newsLatest[0];
  headlineLatestNews_2 =  newsLatest[1];
  const calculateNews = async () => {
    // setTimeout(() => {
      const newsLatest_ = [...newsLatest]
      newsLatest_.splice(0, 2);
    // }, 500);

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
    const reStructure = newsLatest_ && chunk(newsLatest_, newsLatest_.length / 3);
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
    articleBig = {
      height: "400px",
    };
    boxTitle = {
      height: "30%",
      width: "75%",
    };
  };
  calculateNews();
  // alert(loading)
  if (loading === true) {
    return <div><H1>duar</H1></div>;
  }
  return (
    <>
      <div className="container pt-5">
        <div className="row col-12 news m-0 ">
          <div className="col-12 col-sm-6">
            <ArticleBig
              data={headlineLatestNews_1}
              articleBig={articleBig}
              boxTitle={boxTitle}
            />
          </div>
          <div className="col-12 col-sm-6">
            <ArticleBig
              data={headlineLatestNews_2}
              articleBig={articleBig}
              boxTitle={boxTitle}
            />
          </div>
        </div>
        <div className="row col-12 news m-0 ">
          <div className="col-sm-4 col-12">{ArticleSmall_1}</div>
          <div className="col-sm-4 col-12">{ArticleSmall_2}</div>
          <div className="col-sm-4 col-12">{ArticleSmall_3}</div>
        </div>
      </div>
    </>
  );
};

export default Web;
