import React from 'react';
import Link from 'next/link';
const index = ({toggle}) => {
    return (
      <div>
        <div className="sidenav d-block d-sm-none">
          <div id="menuToggle" className="d-block d-sm-none">
            <ul
              id="menu"
              style={{ transform: !toggle ?  "translate(-500px)" : "none"}}
            >
              {/* {localStorage.getItem("token") ? (
                <>
                  {" "}
                  <Link to="/dashboard/home" onClick={() => setSideNav(false)}>
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signin" onClick={() => setSideNav(false)}>
                    <li>
                      <a href="#">Log In</a>
                    </li>
                  </Link>

                  <Link to="/signup" onClick={() => setSideNav(false)}>
                    <li>
                      <a href="#">Sign Up</a>
                    </li>
                  </Link>
                </>
              )} */}

              <Link href="/service" onClick={() => setSideNav(false)}>
                <li>
                  <a href="#">Service</a>
                </li>
              </Link>

              <Link href="/support" onClick={() => setSideNav(!sideNav)}>
                <li>
                  <a href="#">Support</a>
                </li>
              </Link>

              {/* {localStorage.getItem("token") ? (
                <>
                  <Link to="/signin" onClick={(e) => confirmSignOut(e)}>
                    <li>
                      <a>Logout</a>
                    </li>
                  </Link>
                </>
              ) : null} */}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default index;