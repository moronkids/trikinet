import Ads from "components/ads";
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
const News = ({headlineLatestNews, newsLatest, publishedDate}) => {
  if (newsLatest.length > 0) publishedDate = dayjs(headlineLatestNews.date).fromNow(); // 20 years ago
  let ArticleSmall_;
  if(newsLatest.length > 0) {
    ArticleSmall_ = newsLatest.map((val, i) => {
      return (
        <>
          <ArticleSmall truncatex={3} data={val} />
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
        <Ads type="rectangle" class="reactangle w-100" />
        {ArticleBig_}
        <Ads type="rectangle" class="reactangle w-100 mb-2" id="category"/>
        {ArticleSmall_}
      </div>
    </>
  );
};

export default News;
