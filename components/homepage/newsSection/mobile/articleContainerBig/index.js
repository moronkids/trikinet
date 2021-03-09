const Article = ({data}) => {
    return (
      <div className="articleBig mx-auto position-relative my-3">
        <div className="boxTitle position-absolute">
          <div className="textTitle" style={{ margin: "20px 20px 18px 20px" }}>
            <div className="banner pb-1">TRIKINET</div>
            {/* <br /> */}
            <div>{data && data.title.rendered}</div>
          </div>
        </div>
        <img class="" src={data && data.yoast_meta[6].content} alt="" />
      </div>
    );
};

export default Article;