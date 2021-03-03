import React from "react";

const NewestArticle = () => {
  return (
    <>
      <div className="NewestArticle">
        <div className="title pb-2">Artikel Terbaru</div>
        <div className="d-flex articleContent py-4">
          <div className="col-auto articleImage" />
          <div className="col flex-wrap articleTitle">
            Apa itu Zoom, Fitur dan Cara Pakainya
          </div>
        </div>
        <div className="d-flex articleContent py-4">
          <div className="col-auto articleImage" />
          <div className="col flex-wrap articleTitle">
            Apa itu Zoom, Fitur dan Cara Pakainya
          </div>
        </div>
        <div className="d-flex articleContent py-4">
          <div className="col-auto articleImage" />
          <div className="col flex-wrap articleTitle">
            Apa itu Zoom, Fitur dan Cara Pakainya
          </div>
        </div>
      </div>
    </>
  );
};

export default NewestArticle;
