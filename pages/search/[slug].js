import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import SmallLoader from "components/layouts/contentLoader/loader";
import SearchContainers from "components/layouts/searchContainers";
import LoaderSmallArticle from "components/layouts/contentLoader/loader";
import { HIT_SEARCH_NEWS } from "redux/actions";
import ViewMoreButton from "components/viewmore_button";
import { searchNews_ } from "redux/api/news";
const ArticleSmall = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerSmall"),
  {
    loading: () => <SmallLoader />,
  }
);
const Search = ({search_data_}) => {
  const dispatch = useDispatch();
  const [loadx, setLoadx] = useState(false);
  const { search_data, loading, page_load } = useSelector((state) => ({
    search_data: state.news.search.data,
    loading: state.loading.status,
    page_load: state.news.category.page_load,
  }));

  const [items, setItems] = useState([]);
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
      setLoadx(false);
    }
  };
  return (
    <>
      <SearchContainers />
      <div className="infinite-scroll-component__outerdiv d-none" />
      <div className="container mt-5" id="search">
        <div className="row mx-2 result">Result of : {slug}</div>
        <div className="row col-12 news m-0 p-0" style={{ width: "100%" }}>
          {search_data_.length < 1 ? (
            <>
              <p className="text-center mx-auto notfound">
                Sorry keyword "{slug}" is not found...
              </p>
            </>
          ) : null}
          <div className="row col-12 news m-0 p-0">
            {search_data_ &&
              search_data_.map((val, i) => {
                return (
                  <div className="col-md-12 col-lg-4">
                    <ArticleSmall
                      data={val}
                      image={newsImagePhoto}
                      truncatex={truncate}
                    />
                  </div>
                );
              })}
          </div>
          <div className="row col-12 news m-0">
            {search_data &&
              search_data.map((val, i) => {
                return (
                  <div className="col-md-12 col-lg-4">
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
            {loading ? (
              <>
                <div className="col-md-12 col-lg-4 px-0">
                  <LoaderSmallArticle />
                </div>
                <div className="col-md-12 col-lg-4 px-0">
                  <LoaderSmallArticle />
                </div>
                <div className="col-md-12 col-lg-4 px-0">
                  <LoaderSmallArticle />
                </div>
              </>
            ) : null}
          </div>
          <div
            className="text-center w-100 my-5"
            onClick={(e) => {
              fetchMoreData(e);
              setLoadx(true);
            }}
          >
            <ViewMoreButton data={loading} max={page_load} />
            {!page_load && (
              <>
                <h3 className="alldata">All data is loaded</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps({ params }) {
  const searchResult = await searchNews_(params.slug);
  // const latest = await useNewsLatestx({});
  return {
    props: {
      search_data_: searchResult.data,
    },
  };
}
export default Search;
