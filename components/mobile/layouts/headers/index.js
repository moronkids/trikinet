import react, { useContext, useEffect, useState } from "react";
import Logo from "../../../../public/assets/logo-trickynet.svg";
import Hamburger from "../../../../public/assets/hamburgerIcon.svg";
import Minify from "../../../../public/assets/minify.svg";
import { assertNullLiteralTypeAnnotation, directive } from "@babel/types";
import Sidebar from "components/mobile/layouts/sidebar";
import { useAppContext } from "providers/hooks";
import Router from "next/router";
const Headers = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="sticky-top">
      <div className="d-block d-sm-none">
        <nav className="sticky-top navbar navbar-light bg-light">
          {/* <Hamburger onClick={e => setToggle(!toggle)} /> */}
          <Hamburger onClick={(e) => setToggle(!toggle)}/>
          <a className="navbar-brand mx-auto" href="#">
            <img src="/assets/logo-trickynet.svg" className="logoNavbar" />
          </a>
          <Minify />
        </nav>
      </div>
      <Sidebar toggle={toggle}/>
    </div>
  );
};

export default Headers;
