import React, { useContext, useRef } from "react";
import Link from "next/link";
import { AppContext } from "providers/hooks";
const index = ({ refbro }) => {
  const { toggle, setToggle, searchBar } = useContext(AppContext);

  return (
    <div>
      <div className="sidenav d-block d-sm-none">
        <div id="menuToggle" className="d-block d-sm-none">
          <ul
            ref={refbro}
            id="menu"
            style={{
              transform: toggle === false ? "translate(-500px)" : "none",
              width: toggle === false ? "0" : "90%",
              // visibility: "visible",
              transition : toggle === false ? "all 0.5s ease 0s" : "all 0.5s ease 0s",
              overflow: "hidden",
              background: "#E95454 none repeat scroll 0% 0%",
              color: "white",

              // toggle === false ? "all 3s ease-out;" : "all 3s ease-out;",
            }}
          >
            <Link href="/category/internet">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">INTERNET</a>
              </li>
            </Link>

            <Link href="/category/mobile">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">MOBILE</a>
              </li>
            </Link>
            <Link href="/category/web">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">WEB</a>
              </li>
            </Link>
            <Link href="/category/pc">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">PC</a>
              </li>
            </Link>
          </ul>
          <div
            className="backdrop"
            style={{
              transform: toggle === false ? "translate(-1000px)" : "none",
              // transition:
              // toggle === false ? "all 3s ease-out;" : "all 3s ease-out;",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default index;
