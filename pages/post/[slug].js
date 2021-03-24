import SearchContainers from "components/layouts/searchContainers";
import Articlex from "components/article";
import { useSelector } from "react-redux";
import Head from "next/head";
import defaultAxios from "axios";
import { useRouter } from "next/router";
import { useNewsLatestx, detailNews } from "redux/api/news";

const Article = ({ detailNews, latestNews }) => {
  const title = detailNews.yoast_title
  const image = detailNews["_embedded"]["wp:featuredmedia"][0]["source_url"];
  const wps_subtitle = detailNews.wps_subtitle;
  const slug = detailNews.slug;
  return (
    <>
      <Head>
        {detailNews.yoast_meta &&
          detailNews.yoast_meta.map((val, i) => {
            return <meta name={val.name} content={val.content} />;
          })}
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={wps_subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://trikinet.com/post/${slug}`} />
        <meta property="fb:app_id" content="624077051056297" />
        <link rel="canonical" href={`https://trikinet.com/post/${slug}`} />
        <span
          className="st_sharethis"
          st_url={`https://trikinet.com/post/${slug}`}
          st_image={image}
          st_title={title}
        ></span>
        <title>{title}</title>
      </Head>
      <SearchContainers />
      <Articlex detailNews={detailNews} latestNews={latestNews} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const detail = await detailNews(params.slug);
  const latest = await useNewsLatestx({});
  return {
    props: {
      // data : params
      detailNews: detail.detailNews.data,
      latestNews: latest.newsLatest,
    },
  };
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Article;
