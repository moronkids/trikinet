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
const News = () => {
  const dispatch = useDispatch();
  const { newsLatest } = useSelector((state) => ({
    newsLatest: state.news.newsLatest.data,
  }));
  useEffect(() => {
    dispatch({ type: HIT_NEWS_LATEST });
  }, []);
  console.log(newsLatest, "cekiceki")
  const headlineLatestNews = newsLatest[0];
  console.log(newsLatest[0], "cekiceki");
  console.log(newsLatest, "cekiceki");
  newsLatest.shift();

  let publishedDate;
  if (newsLatest.length > 0)
    publishedDate = dayjs(headlineLatestNews.date).fromNow(); // 20 years ago

  const ArticleSmall_ = newsLatest.map((val, i) => {
    return (
      <>
        <ArticleSmall data={val} />
      </>
    );
  });

  return (
    <>
      <div className="d-block d-sm-none container news pt-4 px-4">
        <Ads type="rectangle" class="reactangle w-100" />
        <ArticleBig data={headlineLatestNews} />
        <Ads type="rectangle" class="reactangle w-100 mb-2" />
        {ArticleSmall_}
      </div>
    </>
  );
};

export default News;
