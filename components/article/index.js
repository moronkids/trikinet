import React, { useEffect, useLayoutEffect } from "react";
import Ads from "components/ads";
import ShareButton from "components/share_buttons";
import NewestArticle from "components/article/newestArticle";
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_DETAIL_NEWS, HIT_NEWS_LATEST } from "redux/actions";
import { useRouter } from "next/router";
import Truncate from "react-truncate";
import { MgidWidget } from "react-mgid-widget";
import Link from "next/link";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const Article = ({ detailNews, latestNews }) => {
  // console.log(data, "anjer");
  // const dispatch = useDispatch();
  // const { detailNews, latestNews } = useSelector((state) => ({
  //   detailNews: state.news.detailNews.data,
  //   latestNews: state.news.newsLatest,
  // }));
  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   dispatch({ type: HIT_DETAIL_NEWS, payload: slug });
  //   if (latestNews.data.length === 0) {
  //     dispatch({ type: HIT_NEWS_LATEST });
  //   }
  // }, [slug]);
  // // dayjs.extend(relativeTime);
  let publishedDate;
  if (detailNews.length !== 0) publishedDate = dayjs(detailNews.date).fromNow(); // 20 years ago
  let image;

  if (detailNews["_embedded"]["wp:featuredmedia"] !== undefined) {
    image =
      detailNews["_embedded"]["wp:featuredmedia"][0]["source_url"];
  }
  return (
    <div className="container article">
      <div className="col-lg-9 col-12">
        {/* <Ads type="rectangle" class="rectangle mx-auto mt-5" /> */}
        {/* <MgidWidget
          id="M633939ScriptRootC1063616"
          src="https://jsc.mgid.com/t/r/trikinet.com.1063616.js"
        /> */}
        <div className="breadcrumbCustom" style={{ marginTop: "43px" }}>
          <Link href="/">
            <a href="" className="mr-2">
              Trikinet /
            </a>
          </Link>
          <span
            className="ml-1"
            dangerouslySetInnerHTML={{
              __html: detailNews["_embedded"]["wp:term"][0][0]["name"],
            }}
          ></span>
          {/* <Link href=> */}
          {/* <a href="" className=""> */}

          {/* </a> */}
          {/* </Link> */}
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
          <div className="text-center">
            <img src={image} alt="" />
          </div>
          <div className="pt-3">
            <div className="articleContent pt-3">
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
        {/* <iframe></iframe> */}
        <div id="rightSide" className="col-lg-3 col-12">
          <div className="d-flex articleCategory mt-4">
            <span className="mx-auto my-auto">
              {detailNews["_embedded"]["wp:term"][0][0]["name"]}
            </span>
          </div>
          <div className="writtenBy pt-4">
            Oleh {detailNews._embedded && detailNews._embedded.author[0].name}
          </div>
          <div className="postedTime">{publishedDate}</div>
          <MgidWidget
            id="M633939ScriptRootC1063616"
            src="https://jsc.mgid.com/t/r/trikinet.com.1063616.js"
          />
          <NewestArticle data={latestNews} />
        </div>
      </div>
    </div>
  );
};

export default Article;
