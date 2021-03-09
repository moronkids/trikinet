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
              <img class="" src={data && data.yoast_meta[6].content} alt="" style={{width: `${image && image.width}`}}/>
            </div>
            <div className="ml-2 position-relative mt-1 mb-3 w-100">
              <Truncate className="w-100" lines={truncatex !== 0 ? truncatex : 3}>
                <span>{data && data.title.rendered}</span>
              </Truncate>
              {/* {data.title.rendered} */}
              <span className="writtenBy position-absolute">{`by ${data && data._embedded.author[0].name}`}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Article;
