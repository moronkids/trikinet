import React, { useState } from "react";
import dynamic from "next/dynamic";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HIT_CATEGORY_NEWS, RESET_CATEGORY_NEWS } from "../../redux/actions";
import { useRouter } from "next/router";
import SquareLoader from "components/layouts/contentLoader";
import LoaderSmallArticle from "components/layouts/contentLoader/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import ViewMoreButton from "components/viewmore_button";
// import Spinner from 'public/assets/spinner.svg';
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();

const ArticleSmall = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerSmall"),
  {
    loading: () => <LoaderSmallArticle />,
  }
);
const ArticleBig = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerBig"),
  { loading: () => <SquareLoader /> }
);

const Web = ({
  headlineLatestNews_1,
  headlineLatestNews_2,
  newsLatest,
  loading,
  category,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const [page, setPage] = useState(2);
  const [loadx, setLoadx] = useState(false);
  const { newsLatest_redux, loading_redux, page_load } = useSelector(
    (state) => ({
      // newsLatest_redux:  [] ,
      loading_redux: state.loading.status,
      page_load: state.news.category.page_load,
      newsLatest_redux:
        state.news.category[category] === undefined ||
        state.news.category[category] === "undefined"
          ? []
          : state.news.category[category].data,
    })
  );

  let reStructure2 = [];
  // console.log(newsLatest_redux, newsLatest_redux, "cek data state");
  useEffect(async () => {
    await dispatch({ type: RESET_CATEGORY_NEWS, payload: slug });
    reStructure2 = [];
    setPage(2);
    const section = document.querySelector("#category");
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  }, [slug]);
  let newsImagePhoto = {
    width: "inherit",
  };
  let articleBig;
  let boxTitle;
  let ArticleSmall_1;
  let ArticleSmall_2;
  let ArticleSmall_3;
  let truncate = 3;
  let publishedDate_1;
  let stopLoading = false;
  const [hasMore, sethasMore] = useState(true);

  const [items, setItems] = useState(Array.from({ length: 12 }));

  const chunk = function (array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);

    return [head, ...chunk(tail, size)];
  };
  const fetchMoreData = async (e) => {
    // alert("sds")
    // a fake async api call like which sends
    // 20 more records in .5 secs
    e.preventDefault();
    setItems(items.concat(Array.from({ length: 18 })));
    // setLoadx(true)
    if (!loading_redux) {
      await dispatch({ type: HIT_CATEGORY_NEWS, payload: [slug, page, 18] });
      setPage(page + 1);
      setLoadx(false);
    }
    // console.log("latest redux", newsLatest_redux);
    // }, 2000);
  };
  if (newsLatest_redux !== undefined) {
    reStructure2 = chunk(newsLatest_redux, newsLatest_redux.length / 3);
  }

  const calculateNews = async () => {
    const newsLatest_ = [...newsLatest];
    newsLatest_.splice(0, 2);
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
    newsImagePhoto = {
      width: "inherit",
    };

    if (!loading_redux) {
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
    } else {
      let Articlex = [];
      for (let index = 1; index < 8; index++) {
        Articlex.push(
          <>
            <LoaderSmallArticle />
          </>
        );
      }
      ArticleSmall_1 = Articlex;
      ArticleSmall_2 = Articlex;
      ArticleSmall_3 = Articlex;
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

  return (
    <>
      <div className="" style={{ height: "70px" }} id="category"></div>
      {/* <SquareLoader/> */}
      <div className="container" id="category" style={{ width: "100%" }}>
        <div className="row col-12 news m-0 ">
          <div className="col-12 col-sm-6 ">
            {loading ? (
              // <SquareLoader />
              <></>
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
              // <SquareLoader />
              <></>
            ) : (
              <ArticleBig
                data={headlineLatestNews_2}
                articleBig={articleBig}
                boxTitle={boxTitle}
              />
            )}
          </div>
        </div>
        <div className="row col-12 news m-0">
          <div className="col-sm-4 col-12">{ArticleSmall_1}</div>
          <div className="col-sm-4 col-12">{ArticleSmall_2}</div>
          <div className="col-sm-4 col-12">{ArticleSmall_3}</div>
        </div>

        <div className="row col-12 news m-0">
          {newsLatest_redux &&
            newsLatest_redux.map((val, i) => {
              return (
                <div className="col-sm-4 col-12">
                  <ArticleSmall
                    data={val}
                    image={newsImagePhoto}
                    truncatex={truncate}
                  />
                </div>
              );
            })}
        </div>
        <div className="col-12 row m-0">
          {loading_redux ? (
            <>
              <div className="col-sm-4 col-12">
                <LoaderSmallArticle />
              </div>
              <div className="col-sm-4 col-12">
                <LoaderSmallArticle />
              </div>
              <div className="col-sm-4 col-12">
                <LoaderSmallArticle />
              </div>
            </>
          ) : null}
          {console.log(loading_redux, loadx, "loading")}
        </div>
        <div
          className="text-center w-100 my-5"
          onClick={(e) => {
            fetchMoreData(e);
            setLoadx(true);
          }}
        >
          <ViewMoreButton data={loading_redux} max={page_load} />
          {!page_load && (
            <>
              <h3 className="alldata">All data is loaded</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Web;
