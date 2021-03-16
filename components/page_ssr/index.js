import React, { useState } from "react";
import dynamic from "next/dynamic";
// import ArticleBig from "components/homepage/newsSection/mobile/articleContainerBig";

import ArticleSmall from "components/homepage/newsSection/mobile/articleContainerSmall";
import { HIT_NEWS_LATEST } from "redux/actions";
import Truncate from "react-truncate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HIT_CATEGORY_NEWS } from "../../redux/actions";
import { useRouter } from "next/router";
import SquareLoader from "components/layouts/contentLoader";
import LoaderSmallArticle from "components/layouts/contentLoader/loader";
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();

const ArticleBig = dynamic(
  () => import("components/homepage/newsSection/mobile/articleContainerBig"),
  {
    loading: () => (
      <>
        <SquareLoader />
      </>
    ),
  }
);

const Web = () => {

  return (
    <>
      <div className="" style={{ height: "70px" }} id="category"></div>
      <div className="container" id="category">
        <div className="row col-12 news m-0 ">
          <div className="col-12 col-sm-6">

              <ArticleBig
                data={headlineLatestNews_1}
                articleBig={articleBig}
                boxTitle={boxTitle}
              />

          </div>
          <div className="col-12 col-sm-6">
              <ArticleBig
                data={headlineLatestNews_2}
                articleBig={articleBig}
                boxTitle={boxTitle}
              />
          </div>
        </div>

      </div>
    </>
  );
};

export default Web;
