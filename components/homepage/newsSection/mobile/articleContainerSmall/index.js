import Truncate from "react-truncate";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

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
                // layout="fill"
                className="w-auto position-absolute"
                width={120}
                height={120}
                quality={50}
                style={{
                  backgroundImage: `linear-gradient(rgb(113 113 113 / 10%), rgb(58 58 58 / 10%)),url(${thumbnailImg})`,
                  objectFit: "contain",
                  backgroundPosition: "center",
                  width: "120px",
                  height: "120px",
                }}
              />
            </span>
            <div className="titleSmallArticle ml-2 mt-0 mb-3 justify-center position-relative">
              <Truncate
                className=" justify-center d-none d-lg-block"
                lines={truncatex !== 0 ? truncatex : 3}
                style={{ maxWidth: "250px" }}
              >
                <span className="justify-center d-none d-lg-block">
                  {data && data.title.rendered}
                </span>
              </Truncate>
              <span className="d-lg-none d-block" style={{ maxWidth: "100%" }}>
                {data && data.title.rendered}
              </span>
              {/* {data.title.rendered} */}
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
