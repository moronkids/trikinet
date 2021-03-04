import Logo from "../../../../public/assets/logo-trickynet.svg";
import Hamburger from "../../../../public/assets/hamburgerIcon.svg";
import Minify from "../../../../public/assets/minify.svg";
const Headers = () => {
  return (
    <>
      <nav class="sticky-top navbar navbar-light bg-light">
        <Hamburger />
        <a class="navbar-brand mx-auto" href="#">
          <Logo className="logoNavbar" />
        </a>
        <Minify />
      </nav>
    </>
  );
};

export default Headers;
