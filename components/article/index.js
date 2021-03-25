import React, { useEffect, useLayoutEffect, useState } from "react";
import Ads from "components/ads";
import ShareButton from "components/share_buttons";
import NewestArticle from "components/article/newestArticle";
import { useSelector, useDispatch, connect } from "react-redux";
import { HIT_DETAIL_NEWS, HIT_NEWS_LATEST } from "redux/actions";
import { useRouter } from "next/router";
import Truncate from "react-truncate";
import { MgidWidget } from "react-mgid-widget";
import { InlineShareButtons } from "sharethis-reactjs";
import Link from "next/link";
import dynamic from "next/dynamic";
import generalJS from 'components/lib/postedtime';
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs().format();
const DynamicComponentWithCustomLoading = dynamic(() => import("../ads/mgid"), {
  loading: () => <p>REMOKKK</p>,
});
const Article = ({ detailNews, latestNews }) => {
  // let publishedDate;
  // if (detailNews.length !== 0) publishedDate = dayjs(detailNews.date).fromNow(); // 20 years ago
  let image;

  if (detailNews["_embedded"]["wp:featuredmedia"] !== undefined) {
    image = detailNews["_embedded"]["wp:featuredmedia"][0]["source_url"];
  }
  const [ads, setads] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setads(true);
  //   }, 5000);
  // }, [])
  return (
    <div className="container article">
      <div className="col-lg-9 col-12">
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
              {/* <ShareButton class="mx-auto my-3 d-flex col-12 mx-1" /> */}
            </div>
            <div className="pb-5">
              <InlineShareButtons
                config={{
                  alignment: "center", // alignment of buttons (left, center, right)
                  color: "social", // set the color of buttons (social, white)
                  enabled: true, // show/hide buttons (true, false)
                  font_size: 16, // font size for the buttons
                  labels: "cta", // button labels (cta, counts, null)
                  language: "en", // which language to use (see LANGUAGES)
                  networks: [
                    // which networks to include (see SHARING NETWORKS)
                    "whatsapp",
                    "facebook",
                    "twitter",
                    "flipboard",
                  ],
                  padding: 20, // padding within buttons (INTEGER)
                  radius: 4, // the corner radius on each button (INTEGER)
                  //show_total: true,
                  size: 30, // the size of each button (INTEGER)

                  // OPTIONAL PARAMETERS
                  url: `https://trikinet.com/post/${detailNews.slug}`,
                  image: detailNews.image,
                  title: detailNews.title,
                }}
              />
            </div>
          </div>
          <div>
            <MgidWidget
              id="M633939ScriptRootC1046582"
              src="https://jsc.mgid.com/t/r/trikinet.com.1046582.js"
            />
          </div>
        </div>
        {/* <iframe></iframe>
        <figure></figure> */}
        <div id="rightSide" className="col-lg-3 col-12 ">
          <div className="d-flex articleCategory mt-4">
            <span className="mx-auto my-auto">
              {detailNews["_embedded"]["wp:term"][0][0]["name"]}
            </span>
          </div>
          <div className="writtenBy pt-4">
            Oleh {detailNews._embedded && detailNews._embedded.author[0].name}
          </div>
          <div className="postedTime">
            {generalJS.formatDate(detailNews.date)}
          </div>
          {/* <div className="col-12" style={{ width: "calc(100vw - 6rem)" }}>
            <MgidWidget
              id="M633939ScriptRootC1066913"
              src="https://jsc.mgid.com/t/r/trikinet.com.1066913.js"
            />
          </div> */}
          <div className="sticky-top" style={{paddingTop:"70px", zIndex: "20"}}>
            <DynamicComponentWithCustomLoading />
            <NewestArticle data={latestNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
