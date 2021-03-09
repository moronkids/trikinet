import SearchContainers from "components/layouts/searchContainers";
import Articlex from "components/article";
import { useSelector } from "react-redux";
import Head from "next/head";
const Article = () => {
  const { detailNews, latestNews } = useSelector((state) => ({
    detailNews: state.news.detailNews.data,
    latestNews: state.news.newsLatest.data,
  }));
  console.log(detailNews, "prep");
  return (
    <>
      <Head>
        {detailNews.yoast_meta &&
          detailNews.yoast_meta.map((val, i) => {
            return <meta name={val.name} content={val.content} />;
          })}
        <meta name="description" content={detailNews.yoast_title}></meta>
        <title>{detailNews.yoast_title}</title>
      </Head>
      <SearchContainers />
      <Articlex />
    </>
  );
};

export default Article;
