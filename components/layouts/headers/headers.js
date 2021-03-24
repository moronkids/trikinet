import Logo from "../../../public/assets/logo-trickynet.svg";
import Link from "next/link";
import { HIT_CATEGORY_NEWS, RESET_CATEGORY_NEWS } from "redux/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Sidebar from "components/mobile/layouts/sidebar";
import { AppContext } from "providers/hooks";
import { useContext, useEffect, useRef } from "react";
const headers = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pathname = router.pathname;
  console.log(pathname, "routing")
  const dispatch = useDispatch();
  const reset = (e, slug) => {
    e.preventDefault();
  };
  const {
    toggle,
    setToggle,
    searchBar,
    setSearchBar,
    setInputMode,
    setQuery,
  } = useContext(AppContext);
  const dropdown = useRef(null);
  const search = useRef(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!toggle) return;
    // if (!toggle) {
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setToggle(false);
      }
      if (search.current && !search.current.contains(event.target)) {
        setSearchBar(false);
      }
    }

    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [toggle, searchBar]);
  return (
    <div className="sticky-top">
      <div
        className="headers d-none d-sm-block sticky-top"
        style={{ padding: "0px", margin: "0px", background: "#FFFFFF" }}
      >
        <nav className="navbar navbar-expand-lg navbar-light container">
          <Link href="/">
            <a className="navbar-brand" href="#">
              <img src="/assets/logo-trickynet.svg" className="logoNavbar" />
            </a>
          </Link>
          <button
            onClick={(e) => setToggle(!toggle)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              onClick={(e) => setToggle(!toggle)}
            ></span>
          </button>
          <div className="w-100">
            <div className="collapse navbar-collapse" id="navbarText">
              <ul
                className="navbar-nav"
                style={{ marginLeft: "auto !important" }}
              >
                <li className={`nav-item ${pathname === "/" && "active"}`}>
                  <Link href="/">
                    <a
                      className={`nav-link ${pathname === "/" && "active"}`}
                      href="#"
                    >
                      HOME <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/internet" && "active"}`}
                  onClick={(e) => reset(e, slug)}
                >
                  <Link href="/internet">
                    <a
                      className={`nav-link ${
                        pathname === "/internet" && "active"
                      }`}
                      href="#"
                    >
                      INTERNET
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={(e) => reset(e, slug)}>
                  <Link href="/mobile">
                    <a
                      className={`nav-link ${
                        pathname === "/mobile" && "active"
                      }`}
                      href="#"
                    >
                      MOBILE
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={(e) => reset(e, slug)}>
                  <Link href="/web">
                    <a
                      className={`nav-link ${pathname === "/web" && "active"}`}
                      href="#"
                    >
                      WEB
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pc" onClick={(e) => reset(e, slug)}>
                    <a
                      className={`nav-link ${pathname === "/pc" && "active"}`}
                      href="#"
                    >
                      PC
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LAINNYA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Sidebar
        refbro={dropdown}
        toggle={toggle}
        style={{ zIndex: "2 !important" }}
      />
    </div>
  );
};

export default headers;
