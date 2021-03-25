import Truncate from "react-truncate";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif`;
};
const Article = ({ data, image, truncatex }) => {
  let thumbnailImg = data._embedded["wp:featuredmedia"][0].media_details
    ? data._embedded["wp:featuredmedia"][0].media_details.sizes &&
      data._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
        .source_url
    : null;

  return (
    <>
      <Link href={`/post/${data && data.slug}`}>
        <a>
          <div className="articleSmall d-flex mb-3">
            <span className="d-flex newsPhoto">
              {/* <img width={120} height={120} className="position-relative"/> */}
              <Image
                // class="h-100"

                alt=""
                src={thumbnailImg}
                priority={true}
                className="w-auto position-absolute"
                width={120}
                height={120}
                quality={40}
              />
            </span>
            <div
              className="titleSmallArticle ml-2 mt-0 mb-3 justify-center position-relative"
              style={{ width: "calc(100% - 120px)" }}
            >
              <Truncate
                className=" justify-center  d-none d-sm-block"
                lines={truncatex !== 0 ? truncatex : 3}
                // style={{ maxWidth: "250px" }}
              >
                <span className="justify-center d-none d-lg-block">
                  {data && data.title.rendered}
                </span>
              </Truncate>
              {/* {data.title.rendered} */}

              <span className="justify-center titleSmallArticle d-block d-lg-none">
                {data && data.title.rendered}
              </span>

              <span className="writtenBy position-absolute">{`by ${
                data && data._embedded.author[0].name
              }`}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Article;
