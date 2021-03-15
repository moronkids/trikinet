import Logo from "../../../../public/assets/logo-trickynet.svg";
import Hamburger from "../../../../public/assets/hamburgerIcon.svg";
import Minify from "../../../../public/assets/minify.svg";
const Headers = () => {
  return (
    <div className="d-block d-sm-none sticky-top">
      <nav className="sticky-top navbar navbar-light bg-light">
        <Hamburger />
        <a className="navbar-brand mx-auto" href="#">
          <img src="/assets/logo-trickynet.svg" className="logoNavbar" />
        </a>
        <Minify />
      </nav>
    </div>
  );
};

export default Headers;
