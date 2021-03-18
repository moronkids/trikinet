import React from "react";
import Link from 'next/link';
const NewestArticle = ({data}) => {
  return (
    <>
      <div className="NewestArticle sticky-top">
        <div className="title pb-2">Artikel Terbaru</div>
        {data !== undefined?
          data.data.map((val, i) => {

           if (i <= 9) {
             return (
               <Link href={`/page/${val.slug}`}>
                 <a>
                   <div className="d-flex articleContent py-4">
                     <div
                       className="col-auto articleImage"
                       style={{
                         backgroundImage: `url(${val.yoast_meta[6].content})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                       }}
                     />
                     <div className="col flex-wrap articleTitle">
                       {val.title.rendered}
                     </div>
                   </div>
                 </a>
               </Link>
             );
           }
          })
         : (<></>)}
      </div>
    </>
  );
};

export default NewestArticle;
