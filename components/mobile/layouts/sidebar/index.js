import React, { useContext, useRef } from "react";
import Link from "next/link";
import { AppContext } from "providers/hooks";
const index = ({ refbro }) => {
  const { toggle, setToggle, searchBar } = useContext(AppContext);

  return (
    <div>
      <div className="sidenav d-block d-lg-none">
        <div id="menuToggle" className="d-block d-lg-none">
          <ul
            ref={refbro}
            id="menu"
            style={{
              transform: toggle === false ? "translate(-100px)" : "none",
              width: toggle === false ? "0" : "75%",
              // visibility: "visible",
              transition : toggle === false ? "all 0.25s ease 0s" : "all 0.25s ease 0s",
              overflow: "hidden",
              background: "#E95454 none repeat scroll 0% 0%",
              color: "white",

              // toggle === false ? "all 3s ease-out;" : "all 3s ease-out;",
            }}
          >
            <Link href="/internet">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">INTERNET</a>
              </li>
            </Link>

            <Link href="/mobile">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">MOBILE</a>
              </li>
            </Link>
            <Link href="/web">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">WEB</a>
              </li>
            </Link>
            <Link href="/pc">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">PC</a>
              </li>
            </Link>
            <Link href="/about">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">ABOUT</a>
              </li>
            </Link>

            <Link href="/contact">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">CONTACT US</a>
              </li>
            </Link>
            <Link href="/cyber-media-guide">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">CYBER MEDIA GUIDE</a>
              </li>
            </Link>
            <Link href="/privacy-policy">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">PRIVACY POLICY</a>
              </li>
            </Link>
          </ul>
          <div
            className={"backdrop"}
            style={{
              transform: toggle === false ? "translateX(-1000px)" : "none",
              opacity : toggle === true ? "0.5" : "0.5",
              transition:toggle === false ? "all 0s ease;" : "all 0s ease;"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default index;
