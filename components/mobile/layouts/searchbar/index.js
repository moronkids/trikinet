import React from "react";
import { useRef, useContext, useEffect } from "react";
import { AppContext } from "providers/hooks";
import SearchContainer from "components/layouts/searchContainers/searchbox";
const Search = ({ refbros }) => {
  const { searchBar, setSearchBar } = useContext(AppContext);
  //     const search = useRef(null);
  //   useEffect(() => {
  //     // only add the event listener when the dropdown is opened
  //     if (!searchBar) return;
  //     function handleClick(event) {
  //       if (search.current && !search.current.contains(event.target)) {
  //         setSearchBar(false);
  //         window.addEventListener("click", handleClick);
  //       }
  //     }
  //     window.addEventListener("click", handleClick);
  //     // clean up
  //     return () => window.removeEventListener("click", handleClick);
  //   }, [searchBar]);
  return (
    <>
      <div
        className="search_mobile"
        style={{
          transform: searchBar === false ? "translateY(-500px)" : "none",
          transition: searchBar === false ? "all 0.1s ease 0.1s" : "all 0.1s ease 0.1s",
          zIndex: 16,
          position: "absolute",
          // transition:
          // toggle === false ? "all 3s ease-out;" : "all 3s ease-out;",
        }}
      >
        <div className="wrapper" ref={refbros} style={{ zIndex: 16 }}>
          <SearchContainer marginTop={0} />
        </div>
      </div>
      <div
        className="backdrop"
        style={{
          transform: searchBar === false ? "translateY(-100vh)" : "none",
          // transition:
            transition: searchBar === false ? "all 3s ease-out;" : "all 3s ease-out;",
        }}
      ></div>
    </>
  );
};

export default Search;
