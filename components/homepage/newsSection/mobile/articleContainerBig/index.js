import Truncate from "react-truncate";
import Link from 'next/link'
const Article = ({data}) => {
  console.log("jirr", data)
    return (
      <>
        <Link href={`page/${data && data.slug}`}>
          <a>
            <div className="articleBig mx-auto position-relative my-3">
              <div className="boxTitle position-absolute">
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
              <img class="" src={data && data.yoast_meta[6].content} alt="" />
            </div>
          </a>
        </Link>
      </>
    );
};

export default Article;