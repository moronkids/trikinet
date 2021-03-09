import React from "react";
import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";
import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const Web = () => {
  const dispatch = useDispatch();
  const { newsLatest } = useSelector((state) => ({
    newsLatest: state.news.newsLatest.data,
  }));
  useEffect(() => {
    dispatch({ type: HIT_NEWS_LATEST });
  }, []);
  console.log(newsLatest, "cekiceki");
  const headlineLatestNews_1 = newsLatest[0];
  const headlineLatestNews_2 = newsLatest[1];
  newsLatest.splice(0, 1);

  let publishedDate_1;
  let publishedDate_2;
  console.log(newsLatest.length, "tess");
  if (newsLatest.length > 0) publishedDate_1 = dayjs(headlineLatestNews_1.date).fromNow();
  const chunk = function (array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);

    return [head, ...chunk(tail, size)];
  };
  const reStructure = newsLatest && chunk(newsLatest, 3);
  const newsImagePhoto = {
      width: 'inherit'
  }
  let ArticleSmall_1;
  let ArticleSmall_2;
  let ArticleSmall_3;
  let truncate = 3;
  if(reStructure.length > 0) {
      ArticleSmall_1 = reStructure[0].map((val, i) => {
        return (
          <>
            <ArticleSmall data={val} image={newsImagePhoto} truncatex={truncate}/>
          </>
        );
      });
      ArticleSmall_2 = reStructure[1].map((val, i) => {
        return (
          <>
            <ArticleSmall data={val} image={newsImagePhoto} truncatex={truncate}/>
          </>
        );
      });
      ArticleSmall_3 = reStructure[2].map((val, i) => {
        return (
          <>
            <ArticleSmall data={val} image={newsImagePhoto} truncatex={truncate}/>
          </>
        );
      });
  }
  const articleBig = {
    height: "400px",
  };
  const boxTitle = {
    height: "30%",
    width: "75%",
  };
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
