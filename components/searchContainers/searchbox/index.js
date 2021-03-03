import React from 'react';

const SearchBox = () => {
    return (
      <>
        <div className="box mx-auto d-flex">
          <input
            className="h-100"
            type="text"
            placeholder="Search..."
            style={{ width: "90%" }}
          />
          <div className="minify justify-content-center align-self-center"/>
        </div>
      </>
    );
};

export default SearchBox;