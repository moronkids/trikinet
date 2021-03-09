import Logo from "../../../public/assets/logo-trickynet.svg";
import Link from "next/link";
const headers = () => {
  return (
    <div
      className="headers sticky-top"
      style={{ padding: "0px", margin: "0px", background: "#FFFFFF" }}
    >
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            <Logo className="logoNavbar" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="internet">
                <a className="nav-link" href="#">
                  Internet
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="mobile">
                <a className="nav-link" href="#">
                  Mobile
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="web">
                <a className="nav-link" href="#">
                  Web
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="pc">
                <a className="nav-link" href="#">
                  PC
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lainnya
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default headers;
