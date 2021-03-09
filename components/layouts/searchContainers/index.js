import React from 'react';
import Box from "components/layouts/searchContainers/searchbox"
const SearchContainer = () => {
    return (
      <>
        <div className="searchBox">
          <div className="h-100">
            <div className="line1 row justify-content-center align-self-center col-sm-10 col-md-8 mx-auto">
              SITUS YANG MENYAJIKAN TRIK DAN TIPS INTERNET SERTA INFORMASI
              DIGITAL TERKINI
            </div>
            <div className="text-center col-sm-10 col-md-12 mx-auto">
              <Box />
            </div>
          </div>
        </div>
      </>
    );
};

export default SearchContainer;