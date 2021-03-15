import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import SmallLoader from "components/layouts/contentLoader/loader";
import SearchContainers from "components/layouts/searchContainers";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderSmallArticle from "components/layouts/contentLoader/loader";
import { HIT_SEARCH_NEWS } from "redux/actions";
const ArticleSmall = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerSmall"),
  {
    loading: () => <SmallLoader />,
  }
);
const Search = () => {
    const dispatch = useDispatch();
  const { search_data, loading, page_load } = useSelector((state) => ({
    search_data: state.news.search.data,
    loading: state.loading.status,
    page_load : state.news.category.page_load
  }));
  const [items, setItems] = useState([])
  const router = useRouter();
  const { slug } = router.query;
  let newsImagePhoto = {
    width: "inherit",
  };
  let truncate = 3;
  const [page, setPage] = useState(2);
  const fetchMoreData = async () => {
    setItems(items.concat(Array.from({ length: 18 })));
    if (!loading) {
      await dispatch({ type: HIT_SEARCH_NEWS, payload: [slug, page, 18] });
      setPage(page + 1);
    }
  };
  return (
    <>
      <SearchContainers />
      <div className="container mt-5" id="search">
        <div className="row mx-0 px-0 result">Result of : {slug}</div>
        <div className="row col-12 news m-0 p-0">
          {loading === false && items.length < 1 ? (
            <>
              <p className="text-center mx-auto notfound">
                Sorry keyword "{slug}" is not found...
              </p>
            </>
          ) : null}
          {/* {loading === true && (
            <>
              <div className="row col-12 news m-0 p-0">
                <div className="col-sm-6 col-md-4 col-12 m-0 p-0">
                  <SmallLoader />
                </div>
                <div className="col-sm-6 col-md-4 col-12 m-0 p-0">
                  <SmallLoader />
                </div>
                <div className="col-sm-6 col-md-4 col-12 m-0 p-0">
                  <SmallLoader />
                </div>
              </div>
            </>
          )} */}

          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={page_load}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            loader={
              <div className="row col-12 news m-0 ">
                <div className="col-sm-4 col-12">
                  <LoaderSmallArticle />
                </div>
                <div className="col-sm-4 col-12">
                  <LoaderSmallArticle />
                </div>
                <div className="col-sm-4 col-12">
                  <LoaderSmallArticle />
                </div>
              </div>
            }
          >
            <div className="col-12 row">
              {search_data &&
                search_data.map((val, i) => {
                  return (
                    <>
                      <div className="col-sm-4 col-12 m-0 p-0">
                        <ArticleSmall
                          data={val}
                          image={newsImagePhoto}
                          truncatex={truncate}
                        />
                      </div>
                    </>
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Search;
