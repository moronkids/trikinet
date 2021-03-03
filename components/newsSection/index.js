import React from "react";

const News = () => {
  return (
    <>
      <div
        className="container h-100"
        style={{ minHeight: "900px", paddingTop: "80px" }}
      >
        <div className="row headline h-100">
          <div className="col-md-6 col-12 w-100" style={{ minHeight: "324px" }}>
            <img
              src="../assets/section1_1.svg"
              alt=""
              className=""
              width="100%"
            />
          </div>
          <div className="col-md-6 col-12 h-100 w-100">
            <div className="redBorder mt-4" />
            <div className="category">Web</div>
            <div className="title">
              5 Teknik SEO yang Tidak lagi Efektif di 2020
            </div>
            <div className="writtenBy">
              Written by Bambang Winarso - 33 menit lali
            </div>
            <div className="textCrop">
              Teknik SEO 2020 lebih fokus pada kualitas, keamanan dan kecepatan
            </div>
            <div className="readMore d-flex ">
              Read more <span className="ml-2 arrowReadMore"></span>
            </div>
          </div>
        </div>
        <div className="row news">
          <div className="pl-5 title row w-100">MORE TO READ</div>
          <div className="w-75">
            <div className="redBorder mx-3" />
          </div>
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-3 newsBox">
                <div className="list">
                  Apa itu Zoom, Fitur dan Cara Pakainya
                </div>
                <div className="list">
                  Apa itu Zoom, Fitur dan Cara Pakainya
                </div>
              </div>
              <div className="col-3 newsBox">
                <div className="list">
                  [Panduan Pemula] Cara Backup dan Restore Chat WhatsApp
                </div>
                <div className="list">
                  [Panduan Pemula] Cara Backup dan Restore Chat WhatsApp
                </div>
                <div className="list">
                  [Panduan Pemula] Cara Backup dan Restore Chat WhatsApp
                </div>
              </div>
              <div className="col-3 newsBox">
                <div className="list">
                  Cara Melindungi Tulisan Blog WordPress dengan Password
                </div>
                <div className="list">
                  Cara Melindungi Tulisan Blog WordPress dengan Password
                </div>
                <div className="list">
                  Cara Melindungi Tulisan Blog WordPress dengan Password
                </div>
              </div>
              <div
                className="col-auto float-right mt-3 ml-3"
                style={{
                  width: "300px",
                  height: "250px",
                  background: "#C4C4C4;",
                }}
              />
            </div>
            <div className="w-75 seeLatest text-right px-3">
              SEE ALL LATEST <span className="arrow ml-3" />
            </div>
            <div className="w-75">
              <div className="adsBottom mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
