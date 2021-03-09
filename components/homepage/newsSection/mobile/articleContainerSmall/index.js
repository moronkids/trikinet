import Truncate from "react-truncate";
const Article = ({ data }) => {
  return (
    <>
      <div className="articleSmall d-flex mb-3">
        <div className="newsPhoto">
          <img class="" src={data.yoast_meta[6].content} alt="" />
        </div>
        <div className="ml-2 position-relative mt-1 mb-3 w-100">
          <Truncate className="w-100" lines={4}>
            <span>{data.title.rendered}</span>
          </Truncate>
          {/* {data.title.rendered} */}
          <span className="writtenBy position-absolute">{`by ${data._embedded.author[0].name}`}</span>
        </div>
      </div>
    </>
  );
};

export default Article;
