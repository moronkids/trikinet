import Logo from "../../../public/assets/logo-trickynet.svg";
import Link from "next/link";
import { HIT_CATEGORY_NEWS, RESET_CATEGORY_NEWS } from "redux/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const headers = () => {
    const router = useRouter();
    const { slug } = router.query;
  const dispatch = useDispatch();
  const reset = (e,slug) => {
    // alert("heh")
    e.preventDefault();
    // dispatch({ type: RESET_CATEGORY_NEWS, payload: slug });
  };
  return (
    <div
      className="headers d-none d-sm-block"
      style={{ padding: "0px", margin: "0px", background: "#FFFFFF" }}
    >
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            <img src="/assets/logo-trickynet.svg" className="logoNavbar" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => reset(e, slug)}>
              <Link href="/category/internet">
                <a className="nav-link" href="#">
                  Internet
                </a>
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => reset(e, slug)}>
              <Link href="/category/mobile">
                <a className="nav-link" href="#">
                  Mobile
                </a>
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => reset(e, slug)}>
              <Link href="/category/web">
                <a className="nav-link" href="#">
                  Web
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
                Lainnya
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default headers;
