import Truncate from "react-truncate";
import Link from 'next/link'
const Article = ({data, articleBig, boxTitle}) => {
  console.log("jirr", data)
    return (
      <>
        <Link href={`/page/${data && data.slug}`}>
          <a>
            <div
              className="articleBig mx-auto position-relative my-3"
              style={{ height: articleBig && articleBig.height }}
            >
              <div
                className="boxTitle position-absolute"
                style={{
                  height: boxTitle && boxTitle.height,
                  width: boxTitle && boxTitle.width,
                }}
              >
                <div
                  className="textTitle"
                  style={{ margin: "20px 20px 18px 20px" }}
                >
                  <div className="banner pb-1">TRIKINET</div>
                  {/* <br /> */}
                  <Truncate lines={3}>
                    <div>{data && data.title.rendered}</div>
                  </Truncate>
                </div>
              </div>
              <img
                class=""
                src={data && data.yoast_meta[6].content}
                alt=""
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
                }}
              />
            </div>
          </a>
        </Link>
      </>
    );
};

export default Article;