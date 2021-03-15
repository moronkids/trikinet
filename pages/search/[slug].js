import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SmallLoader from "components/layouts/contentLoader/loader";
const ArticleSmall = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerSmall"),
  {
    loading: () => <SmallLoader />,
  }
);
const Search = () => {
  const { search_data, loading } = useSelector((state) => ({
    search_data: state.news.search.data,
    loading: state.loading.status,
  }));
  const router = useRouter();
  const { slug } = router.query;
  let newsImagePhoto = {
    width: "inherit",
  };
  let truncate = 3;

  return (
    <>
      <div className="container mt-5">
        <div className="row mx-0 px-0">Result of : {slug}</div>
        <div className="row col-12 news m-0 p-0">
          {loading === true &&  (<>
        <div className="row col-12 news m-0 p-0">
          <div className="col-sm-4 col-12 m-0 p-0">
            <SmallLoader />
          </div>
          <div className="col-sm-4 col-12 m-0 p-0">
            <SmallLoader />
          </div>
          <div className="col-sm-4 col-12 m-0 p-0">
            <SmallLoader />
          </div>
        </div>
      </>)}
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
      </div>
    </>
  );
};

export default Search;
