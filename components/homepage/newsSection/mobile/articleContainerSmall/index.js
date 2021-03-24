import Truncate from "react-truncate";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const Article = ({ data, image, truncatex }) => {
  let thumbnailImg = data._embedded["wp:featuredmedia"][0].media_details
    ? data._embedded["wp:featuredmedia"][0].media_details.sizes &&  data._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
    : null;

  return (
    <>
      <Link href={`/post/${data && data.slug}`}>
        <a>
          <div className="articleSmall d-flex mb-3">
            {/* <div className="newsPhoto"> */}
              <Image
                // class="h-100"
                alt=""
                src={thumbnailImg}
                // layout="fill"
                width ={120}
                height ={120}
                // style={{
                //   // backgroundImage: `linear-gradient(rgb(113 113 113 / 10%), rgb(58 58 58 / 10%)),url(${thumbnailImg})`,
                //   objectFit: "contain",
                //   backgroundPosition: "center",
                // }}
              />
            {/* </div> */}
            <div className="titleSmallArticle ml-2 position-relative mt-0 mb-3 w-100 justify-center">
              <Truncate
                className="w-100 justify-center"
                lines={truncatex !== 0 ? truncatex : 3}
              >
                <span>{data && data.title.rendered}</span>
              </Truncate>
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
