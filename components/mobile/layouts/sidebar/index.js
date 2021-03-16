import React from "react";
import Link from "next/link";
const index = ({ toggle }) => {
  return (
    <div>
      <div className="sidenav d-block d-sm-none">
        <div id="menuToggle" className="d-block d-sm-none">
          <ul
            id="menu"
            style={{ transform: !toggle ? "translate(-500px)" : "none" }}
          >
            <Link href="/category/internet">
              <li>
                <a href="#">Internet</a>
              </li>
            </Link>

            <Link href="/category/mobile">
              <li>
                <a href="#">Mobile</a>
              </li>
            </Link>
            <Link href="/category/web">
              <li>
                <a href="#">Web</a>
              </li>
            </Link>
            <Link href="/category/pc">
              <li>
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
