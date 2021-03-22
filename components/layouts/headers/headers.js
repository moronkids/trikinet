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
  const dispatch = useDispatch();
  const reset = (e, slug) => {
    e.preventDefault();
    // dispatch({ type: RESET_CATEGORY_NEWS, payload: slug });
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
              <ul className="navbar-nav" style={{marginLeft: "auto !important"}}>
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      HOME <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={(e) => reset(e, slug)}>
                  <Link href="/category/internet">
                    <a className="nav-link" href="#">
                      INTERNET
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={(e) => reset(e, slug)}>
                  <Link href="/category/mobile">
                    <a className="nav-link" href="#">
                      MOBILE
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={(e) => reset(e, slug)}>
                  <Link href="/category/web">
                    <a className="nav-link" href="#">
                      WEB
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/category/pc" onClick={(e) => reset(e, slug)}>
                    <a className="nav-link" href="#">
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
