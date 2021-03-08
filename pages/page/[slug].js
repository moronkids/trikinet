import SearchContainers from "components/homepage/searchContainers";
import Articlex from "components/article";
import { useSelector } from "react-redux";
import Head from "next/head"
const Article = () => {
  const { detailNews, latestNews } = useSelector((state) => ({
    detailNews: state.news.detailNews.data,
    latestNews: state.news.newsLatest.data,
  }));
  console.log(detailNews, "prep")
  return (
    <>
      {detailNews.yoast_meta && detailNews.yoast_meta.map((val, i) => {
        return (
          <Head>
            <meta name={val.name} content={val.content} />
          </Head>
        );
      })}
      <SearchContainers />
      <Articlex />
    </>
  );
};

export default Article;
