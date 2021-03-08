import React, { useEffect, useLayoutEffect } from "react";
import Ads from "components/ads";
import ShareButton from "components/share_buttons";
import NewestArticle from "components/article/newestArticle"
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_DETAIL_NEWS } from "redux/actions";
import Truncate from "react-truncate";
const Article = () => {
    const dispatch = useDispatch();
    const { detailNews } = useSelector((state) => ({
      detailNews: state.news.detailNews.data,
    }));
    useEffect(() => {
      dispatch({ type: HIT_DETAIL_NEWS });
    }, []);
  return (
    <div className="container article">
      <div className="col-lg-9 col-12">
        <Ads type="rectangle" class="rectangle mx-auto mt-5" />
        <div className="breadcrumbCustom" style={{ marginTop: "43px" }}>
          Trikinet / Web
        </div>
      </div>
      <div className="w-100 d-flex row col-12 m-0 p-0">
        <div id="leftSide" className="col-lg-9 col-12">
          <div className="articleTitle pt-4">
            {detailNews.title !== undefined ? (
              <>{detailNews.title.rendered}</>
            ) : null}
          </div>
          <div className="articleKeyword pt-2">
            {detailNews.title !== undefined ? (
              <>{detailNews.yoast_title}</>
            ) : null}
          </div>
          <div className="pt-3">
            {detailNews.content !== undefined ? (
              <>
                <img
                  src={detailNews.yoast_meta[6].content}
                  alt=""
                  className="articleMainImage"
                />
              </>
            ) : (
              <>null</>
            )}

            <div className="articleContent pt-3">
              {console.log(detailNews, "cek")}
              {detailNews.content !== undefined ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailNews.content.rendered,
                    }}
                  ></div>
                </>
              ) : (
                <>null</>
              )}
              <ShareButton class="mx-auto my-3 d-flex col-12 mx-1" />
            </div>
          </div>
        </div>
        <div id="rightSide" className="col-lg-3 col-12">
          <div className="d-flex articleCategory mt-4">
            <span className="mx-auto my-auto">Web</span>
          </div>
          <div className="writtenBy pt-4">Oleh Bambang Winarso</div>
          <div className="postedTime">2 jam lalu</div>
          <Ads type="square" class="mt-5 mb-5"></Ads>
          <NewestArticle />
        </div>
      </div>
    </div>
  );
};

export default Article;
