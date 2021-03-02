import Logo from "../../../assets/logo-trickynet.svg";
import DailySocial from "../../../assets/footer-logo.svg";
// import Logo from "assets/logo-trickynet.svg";
const headers = () => {
  return (
    <>
      <div className="footer">
        <div className="self-container">
          <div className="row section1">
            <div className="col-3">
              <Logo className="logoFooter" />
            </div>
            <div className="d-flex flex-wrap col-7">
              <span className="menu">INTERNET</span>
              <span className="menu">MOBILE</span>
              <span className="menu">PC</span>
              <span className="menu">WEB</span>
              <span className="menu">ABOUT</span>
              <span className="menu">CONTACT US</span>
              <span className="menu">PRIVACY POLICY</span>
              <span className="menu">CYBER MEDIA GUIDE</span>
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
