import React, { useContext, useRef } from "react";
import Link from "next/link";
import { AppContext } from "providers/hooks";
const index = ({refbro}) => {
  const {toggle, setToggle} = useContext(AppContext)

  return (
    <div>
      <div className="sidenav d-block d-sm-none" ref={refbro}>
        <div id="menuToggle" className="d-block d-sm-none">
          <ul
            id="menu"
            style={{
              transform: toggle === false ? "translate(-300px)" : "none",
              // transition:
                // toggle === false ? "all 3s ease-out;" : "all 3s ease-out;",
            }}
          >
            <Link href="/category/internet">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">Internet</a>
              </li>
            </Link>

            <Link href="/category/mobile">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">Mobile</a>
              </li>
            </Link>
            <Link href="/category/web">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">Web</a>
              </li>
            </Link>
            <Link href="/category/pc">
              <li onClick={(e) => setToggle(!toggle)}>
                <a href="#">PC</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
