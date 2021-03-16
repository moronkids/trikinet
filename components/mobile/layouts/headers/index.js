import react, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../../../public/assets/logo-trickynet.svg";
import Hamburger from "../../../../public/assets/hamburgerIcon.svg";
import Minify from "../../../../public/assets/minify.svg";
import { assertNullLiteralTypeAnnotation, directive } from "@babel/types";
import Sidebar from "components/mobile/layouts/sidebar";
import { AppContext } from "providers/hooks";
import Router from "next/router";
const Headers = () => {
  // const [toggle, setToggle] = useState(false);
  const { toggle, setToggle } = useContext(AppContext);
  const dropdown = useRef(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!toggle) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setToggle(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [toggle]);
  return (
    <>
      {/* <div
        className="sticky-top d-block d-sm-none"
        style={{ width: "100vw !important" }}
      > */}
        <nav
          className="sticky-top navbar navbar-light bg-light"
          style={{ width: "100vw !important" }}
        >
          <Hamburger onClick={(e) => setToggle(!toggle)} />
          <a className="navbar-brand mx-auto" href="#">
            <img src="/assets/logo-trickynet.svg" className="logoNavbar" />
          </a>
          <Minify />
        </nav>
        <Sidebar refbro={dropdown} toggle={toggle} />
      {/* </div> */}
    </>
  );
};

export default Headers;
