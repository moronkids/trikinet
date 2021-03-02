import Logo from "../../../public/assets/logo-trickynetFooter.svg";
import Image from "next/image";
const headers = () => {
  return (
    <>
      <div className="footer">
        <div className="self-container mx-auto">
          <div className="row section1">
            <div className="col-sm-3 col-12 d-none d-lg-block position-absolute">
              <Logo
                className="d-none d-sm-block logoFooter"
              />
            </div>
            <div className="col-12 d-block d-lg-none">
              <Logo
                className="logoFooter d-block d-lg-none mx-auto"
                // style={{ width: "220px", height: "53px" }}
              />
            </div>
            <div className="d-flex flex-wrap col-lg-6 col-md-7  mx-auto">
              <span className="menu mx-auto mt-lg-0 mt-4">INTERNET</span>
              <span className="menu mx-auto mt-lg-0 mt-4">MOBILE</span>
              <span className="menu mx-auto mt-lg-0 mt-4">PC</span>
              <span className="menu mx-auto mt-lg-0 mt-4">WEB</span>
              <span className="menu mx-auto mt-lg-0 mt-4">ABOUT</span>
            </div>
            <div className="d-flex flex-wrap col-lg-7 col-md-8  mx-auto">
              <span className="menu mx-auto mt-sm-0 mt-4">CONTACT US</span>
              <span className="menu mx-auto mt-sm-0 mt-4">PRIVACY POLICY</span>
              <span className="menu mx-auto mt-sm-0 mt-4">
                CYBER MEDIA GUIDE
              </span>
            </div>
          </div>
          <div className="section2 text-center">
            <div className="align-middle line1">
              {/* Powered by */}
              <span class="align-middle" style={{top:"-8px", position:"relative"}}>Powered by</span>
              <div
              className="dsLogo"
                style={{
                  position: "relative",
                  width: "172px",
                  height: "46px",
                  display: "inline-block",
                  marginLeft: "16px",
                }}
              >
                <Image
                  src="/public/assets/footer-logo.svg"
                  objectFit="contain"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
            <div className="line2">
              Copyright © 2019 PT. Digital Startup Nusantara
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default headers;
