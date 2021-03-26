import Ads from "components/ads";
import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";
import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MgidWidget } from "react-mgid-widget";
import dynamic from "next/dynamic";
import Link from "next/link";

const News = ({headlineLatestNews, newsLatest, publishedDate}) => {
  if (newsLatest.length > 0) publishedDate = dayjs(headlineLatestNews.date).fromNow(); // 20 years ago
  let ArticleSmall_;
  if(newsLatest.length > 0) {
    ArticleSmall_ = newsLatest.map((val, i) => {
      return (
        <>
          <ArticleSmall truncatex={2} data={val} />
        </>
      );
    });
  }
  let ArticleBig_;
  if(headlineLatestNews) {
    ArticleBig_ = <ArticleBig data={headlineLatestNews} />;
  }
  return (
    <>
      <div className="d-block d-sm-none container news pt-4 px-4">
        {ArticleBig_}
        {ArticleSmall_}
        <div className="seeLatest text-right px-3">
          <Link href="/latest">
            <a>
              {" "}
              SEE ALL LATEST <span className="arrow ml-3" />
            </a>
          </Link>
        </div>
        <div className="col-12 d-block pb-5">
        </div>
      </div>
    </>
  );
};

export default News;
