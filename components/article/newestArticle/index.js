import React from "react";

const NewestArticle = ({data}) => {
  return (
    <>
      <div className="NewestArticle">
        <div className="title pb-2">Artikel Terbaru</div>
        {data !== undefined?
          data.data.map((val, i) => {

           if (i <= 9) {
             return (
             <div className="d-flex articleContent py-4">
               <div
                 className="col-auto articleImage"
                 style={{
                   backgroundImage: `url(${val.yoast_meta[6].content})`,
                   backgroundSize: "cover",
                  backgroundPosition: "center"
                 }}
               />
               <div className="col flex-wrap articleTitle">
                 {val.title.rendered}
               </div>
             </div>
           );
           }
          })
         : (<></>)}
        {/* <div className="d-flex articleContent py-4">
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
        </div> */}
      </div>
    </>
  );
};

export default NewestArticle;
