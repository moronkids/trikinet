import Logo from "../../../assets/logo-trickynetFooter.svg";
import DailySocial from "../../../assets/footer-logo.svg";
// import Logo from "assets/logo-trickynet.svg";
const headers = () => {
  return (
    <>
      <div className="footer">
        <div className="self-container mx-auto">
          <div className="row section1">
            <div className="col-sm-3 col-12 d-none d-lg-block position-absolute">
              <Logo
                className="d-none d-sm-block logoFooter"
                // style={{ width: "220px", height: "53px" }}
              />
            </div>
            <div className="col-12 d-block d-lg-none">
              <Logo
                className="logoFooter d-block d-lg-none mx-auto"
                // style={{ width: "220px", height: "53px" }}
              />
            </div>
            <div className="d-flex flex-wrap col-lg-6 col-md-7 mt-lg-0 mt-4 mx-auto">
              <span className="menu mx-auto">INTERNET</span>
              <span className="menu mx-auto">MOBILE</span>
              <span className="menu mx-auto">PC</span>
              <span className="menu mx-auto">WEB</span>
              <span className="menu mx-auto">ABOUT</span>
            </div>
            <div className="d-flex flex-wrap col-lg-7 col-md-8 mt-sm-0 mt-4 mx-auto">
              <span className="menu mx-auto">CONTACT US</span>
              <span className="menu mx-auto">PRIVACY POLICY</span>
              <span className="menu mx-auto">CYBER MEDIA GUIDE</span>
            </div>
          </div>
          <div className="section2 text-center">
            <div className="text-align-bottom line1">
              {/* Powered by */}
              <div className="mx-auto">
                <p
                  className="d-inline"
                  style={{ marginRight: "17px", verticalAlign: "text-bottom" }}
                >
                  Powered by
                </p>
                <DailySocial
                  className="ds-logo"
                  style={{ verticalAlign: "text-bottom" }}
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
