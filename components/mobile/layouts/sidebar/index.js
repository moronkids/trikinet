import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "providers/hooks";
const index = () => {
  const {toggle, setToggle} = useContext(AppContext)
  console.log(toggle, "cekibro")
  return (
    <div>
      <div className="sidenav d-block d-sm-none">
        <div id="menuToggle" className="d-block d-sm-none">
          <ul
            id="menu"
            style={{
              transform: toggle === false ? "translate(-500px)" : "none",
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
