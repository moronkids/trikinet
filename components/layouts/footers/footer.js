import Logo from "../../../public/assets/logo-trickynetFooter.svg";
import Image from "next/image";
import Link from "next/link";
const headers = () => {
  return (
    <>
      <div className="footer">
        <div className="self-container mx-auto">
          <div className="row section1 col-12 m-0 p-0 pb-3">
            <div className="col-sm-3 col-12 d-none d-lg-block position-absolute">
              <img
                src="/assets/logo-trickynetFooter.svg"
                className="d-none d-sm-block logoFooter"
              />
            </div>
            <div className="col-12 d-block d-lg-none pb-5">
              <img
                src="/assets/logo-trickynetFooter.svg"
                className="logoFooter d-block d-lg-none mx-auto"
                // style={{ width: "220px", height: "53px" }}
              />
            </div>
            <div className="col-lg-6 col-md-7  mx-auto text-center">
              <Link href="/internet">
                <a className="menu mx-auto mt-lg-0 mt-4">INTERNET</a>
              </Link>
              <Link href="/mobile">
                <a className="menu mx-auto mt-lg-0 mt-4">MOBILE</a>
              </Link>
              <Link href="/pc">
                <a className="menu mx-auto mt-lg-0 mt-4">PC</a>
              </Link>
              <Link href="/web">
                <a className="menu mx-auto mt-lg-0 mt-4">WEB</a>
              </Link>
              <Link href="/about">
                <a className="menu mx-auto mt-lg-0 mt-4">ABOUT</a>
              </Link>
            </div>
            <div className="col-lg-7 col-md-8  mx-auto pt-4 text-center">
              <Link href="/contact">
                <a className="menu mx-auto mt-sm-0 mt-4">CONTACT US</a>
              </Link>
              <Link href="/privacy-policy">
                <a className="menu mx-auto mt-sm-0 mt-4">PRIVACY POLICY</a>
              </Link>
              <Link href="/cyber-guide-media">
                <a className="menu mx-auto mt-sm-0 mt-4">CYBER GUIDE MEDIA</a>
              </Link>
            </div>
          </div>
          <div className="section2 text-center">
            <div className="d-flex text-align-bottom line1">
              {/* Powered by */}
              {/* <span class="align-middle" style={{top:"-8px", position:"relative"}}>Powered by</span> */}
              <div className="d-flex mx-auto">
                <div
                  class="align-middle my-auto"
                  style={{ position: "relative" }}
                >
                  Powered by
                </div>
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
                    src="/assets/footer-logo.svg"
                    objectFit="contain"
                    layout="fill"
                    // width={50}
                    // height={50}
                    quality={50}
                  />
                  {/* <img
                  src="/assets/footer-logo.svg"
                  className="dsLogo"
                  style={{objectFit:"contain"}}
                  width="auto"
                  // height="46"
                /> */}
                </div>
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
