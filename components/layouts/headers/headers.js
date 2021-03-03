import Logo from "../../../public/assets/logo-trickynet.svg";

const headers = () => {
  return (
    <div className="headers sticky-top" style={{padding : "0px", margin: "0px", background: "#FFFFFF"}}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="#">
          <Logo className="logoNavbar" />
        </a>
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Internet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web
              </a>
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
