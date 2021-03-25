import Truncate from "react-truncate";
import Link from "next/link";
import Image from "next/image";
const Article = ({ data, articleBig, boxTitle , category}) => {
  const author = data['_embedded'].author[0].name;
  const cat = category && category.toUpperCase()
  console.log(data, "cek")
  return (
    <>
      <Link href={`/post/${data && data.slug}`}>
        <a>
          <div
            className="articleBig mx-auto position-relative my-3"
            style={{ height: articleBig && articleBig.height }}
          >
            <div
              className="d-flex boxTitle position-absolute"
              style={{
                height: boxTitle && boxTitle.height,
                width: boxTitle && boxTitle.width,
                zIndex: "100",
              }}
            >
              <div
                className="textTitle flex-wrap"
                style={{ margin: "20px 20px 18px 20px" }}
              >
                <div className="banner pb-1">{cat}</div>
                <Truncate lines={2}>
                  <div>{data && data.title.rendered}</div>
                </Truncate>
                <div className="writtenBy mt-2">
                  {`By ${data && data._embedded.author[0].name}`}
                </div>
              </div>
            </div>
            {/* <div
              class="w-100 h-100"
              alt=""
              style={{
                backgroundImage:
                  data &&
                  `linear-gradient(rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0.4)),url(${data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
                objectFit: "fit",
                backgroundPosition: "center",
              }}
            /> */}
            <div className="">
              <Image
                alt=""
                src={
                  data._embedded["wp:featuredmedia"][0].media_details.sizes.full
                    .source_url
                }
                layout="fill"
                priority={true}
                className="position-relative"
                // width={120}
                // height={120}
                quality={40}
              />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Article;
