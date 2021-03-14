import Truncate from "react-truncate";
import Link from "next/link";

const Article = ({ data, image, truncatex }) => {
  // alert(truncatex)
  return (
    <>
      <Link href={`/page/${data && data.slug}`}>
        <a>
          <div className="articleSmall d-flex mb-3">
            <div className="newsPhoto">
              <img
                class=""
                src={
                  data &&
                  data._embedded["wp:featuredmedia"][0].media_details.sizes
                    .thumbnail.source_url
                }
                alt=""
                style={{
                  width: `${image && image.width}`,
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
                }}
              />
            </div>
            <div className="ml-2 position-relative mt-1 mb-3 w-100">
              <Truncate
                className="w-100"
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
