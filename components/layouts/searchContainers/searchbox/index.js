import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIT_SEARCH_NEWS } from "redux/actions";
import { useRouter } from "next/router";
import SearchContainer from "components/layouts/searchContainers/searchbox";
import { AppContext } from "providers/hooks";
const SearchBox = ({ marginTop }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchBar, setSearchBar } = useContext(AppContext);
  const [query, setQuery] = useState(null);
  const searchArticle = async (e, query) => {
    e.preventDefault();
    setSearchBar(!searchBar);
    await dispatch({ type: HIT_SEARCH_NEWS, payload: [query, null, null] });
    router.push(`/search/${query}`);
  };
  return (
    <>
      <div
        className="box mx-auto d-flex "
        style={{ marginTop: marginTop !== null && marginTop }}
      >
        <input
          className="h-100"
          type="text"
          value={query}
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "90%" }}
          onKeyPress={(e) => {
            e.key === "Enter" && searchArticle(e, query);
            e.key === "Enter" && setQuery("");
          }}
        />
        {/* </form> */}
        <div className="minify justify-content-center align-self-center" />
      </div>
    </>
  );
};

export default SearchBox;
