import SearchContainers from "components/layouts/searchContainers";
import Articlex from "components/article";
import { useSelector } from "react-redux";
import Head from "next/head";
import defaultAxios from "axios";
import { useRouter } from "next/router";
import { useNewsLatestx, detailNews } from "redux/api/news";
const Article = ({ detailNews, latestNews }) => {
  //
  // const { detailNews, latestNews } = useSelector((state) => ({
  //   detailNews: state.news.detailNews.data,
  //   latestNews: state.news.newsLatest.data,
  // }));
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
      <Articlex detailNews={detailNews} latestNews={latestNews}/>
    </>
  );
};
// Article.getInitialProps = async ({ query }) => {
//   const { id } = query;
//   // alert(id)
//
//   return { id };
// };
// export async function getStaticPaths() {
//   const router = useRouter();
//   const { pid } = router.query;
//   // const router = useRouter();
//   // const { slug } = router.query;
//   return {
//     paths: [
//       { params: { pid } }, // See the "paths" section below
//     ],
//     fallback: true, //or false // See the "fallback" section below
//   };
// }
// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   // const page = data[1] !== null ? data[1] : 1;
//   // const limit = data[2] !== null ? data[2] : 20;

//   let headlineLatestNews_1;
//   let headlineLatestNews_2;
//   const axios = defaultAxios.create({
//     baseURL: "https://venom.trikinet.com",
//     headers: {
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       "Access-Control-Allow-Origin": "*",
//       // Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     withCredentials: false,
//     crossorigin: true,
//   });
//   const todos = await axios.get("news/slug/" + slug).catch(function (error) {
//     if (error.response.status !== 200) {
//
//       return {
//         status: "failed",
//       };
//     }
//   });
//
//   // return {
//   //   data: todos.data.data,
//   //   status: todos.status,
//   //   page: page,
//   //   category: category,
//   // };
//   //
//   // const newsLatest = (await todos.data.statusCode) ? todos.data.data : [];
//   // headlineLatestNews_1 = await newsLatest[0];
//   // headlineLatestNews_2 = await newsLatest[1];

//   return {
//     props: {
//       data: todos.data.data,
//       status: todos.status,
//       page: page,
//       category: category,
//     },
//   };
// }
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
