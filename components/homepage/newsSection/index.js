import React, { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_NEWS_LATEST } from "redux/actions";
import MobileView from "components/homepage/newsSection/mobile";
import Truncate from "react-truncate";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const News = ({ headlineLatestNews, newsLatest, publishedDate }) => {
  return (
    <>
      <div className="d-none d-sm-block container h-100 newsSection">
        {headlineLatestNews !== undefined ? (
          <>
            <div className="row headline h-100">
              <div className="col-md-6 col-12 w-100 imgHeadline">
                <img
                  // src="../assets/section1_1.svg"
                  src={headlineLatestNews.yoast_meta[6].content}
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
              <div className="col-md-6 col-12 h-100 w-100">
                <div className="redBorder mt-4" />
                <div className="category">Web</div>
                <Link href={"page/" + headlineLatestNews.slug}>
                  <a>
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: headlineLatestNews.title.rendered,
                      }}
                    />
                  </a>
                </Link>

                <div className="writtenBy">
                  {`Written by ${headlineLatestNews._embedded.author[0].name} - ${publishedDate}`}
                </div>
                <Link href={"page/" + headlineLatestNews.slug}>
                  <a>
                    <div className="textCrop">
                      <Truncate lines={2}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: headlineLatestNews.content.rendered,
                          }}
                        />
                      </Truncate>
                    </div>
                  </a>
                </Link>
                <Link href={"page/" + headlineLatestNews.slug}>
                  <a href="" className="">
                    <div className="readMore d-flex ">
                      Read more <span className="ml-2 arrowReadMore"></span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="row news">
          <div className="pl-5 title row w-100">MORE TO READ</div>
          <div className="w-75 col-12 col-md-9 col-lg-9">
            <div className="redBorder" />
          </div>
          <div className="row col-12 col-lg-9 px-0 mx-0">
            <div className="col-12 d-flex mx-0 px-0">
              <div className="col-sm-4 col-md-4 col-lg-4 col-12 newsBox">
                {newsLatest !== undefined ? (
                  newsLatest.map((val, i) => {
                    let data;
                    if (i <= 4) {
                      // data = <div className="list">{val.title.rendered}</div>;
                      data = (
                        <Link href={`page/${val.slug}`}>
                          <a>
                            <div className="list">{val.title.rendered}</div>
                          </a>
                        </Link>
                      );
                    }
                    return <>{data}</>;
                  })
                ) : (
                  <>null</>
                )}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-12 newsBox">
                {newsLatest !== undefined ? (
                  newsLatest.map((val, i) => {
                    let data;
                    if (i <= 9 && i >= 5) {
                      data = (
                        <Link href={`page/${val.slug}`}>
                          <a>
                            <div className="list">{val.title.rendered}</div>
                          </a>
                        </Link>
                      );
                    }
                    return <>{data}</>;
                  })
                ) : (
                  <>null</>
                )}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-12 newsBox">
                {newsLatest !== undefined ? (
                  newsLatest.map((val, i) => {
                    let data;
                    if (i <= 14 && i >= 10) {
                      data = (
                        <Link href={`page/${val.slug}`}>
                          <a>
                            <div className="list">{val.title.rendered}</div>
                          </a>
                        </Link>
                      );
                    }
                    return <>{data}</>;
                  })
                ) : (
                  <>null</>
                )}
              </div>

              <div
                className="col-auto d-none d-sm-block float-right mt-3 ml-3"
                style={{
                  width: "300px",
                  height: "250px",
                  backgroundColor: "#C4C4C4;",
                }}
              />
            </div>

            <div className="seeLatest text-right px-3">
              <Link href="/article">
                <a>
                  {" "}
                  SEE ALL LATEST <span className="arrow ml-3" />
                </a>
              </Link>
            </div>
            {/* <div className=""> */}
            <div className="adsBottom text-left mx-3 mx-sm-0" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <MobileView
        headlineLatestNews={headlineLatestNews}
        publishedDate={publishedDate}
        // headlineLatestNews_2={headlineLatestNews_2}
        newsLatest={newsLatest}
      />
    </>
  );
};

export default News;
