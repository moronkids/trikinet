import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIT_SEARCH_NEWS } from "redux/actions";
import { useRouter } from "next/router";
const SearchBox = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [query, setQuery] = useState(null);
  const searchArticle = async (e,query) => {
    e.preventDefault()
    await dispatch({ type: HIT_SEARCH_NEWS, payload: [query, null, null] });
    router.push(`/search/${query}`);
  };
  return (
    <>
      <div className="box mx-auto d-flex ">
        <input
          className="h-100"
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "90%" }}
          onKeyPress= { (e) => e.key === 'Enter' && searchArticle(e, query)}
        />
        {/* </form> */}
        <div className="minify justify-content-center align-self-center" />
      </div>
    </>
  );
};

export default SearchBox;
