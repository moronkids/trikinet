import React from 'react';

const squareNews = () => {
    return (
      <div
        className="p-0 m-0 col-auto mx-auto mb-3"
        style={{
          borderRadius: "5px",
          height: "368px",
          backgroundColor: "gray",
          border: "1px solid gray",
          width:"334px"
        }}
      >
        <div
          className="p-0 float-left position-absolute w-100"
          style={{
            height: "60%",
            backgroundColor: "gray",
            borderTopLeftRadius: "5px",
            borderTopLeftRadius: "5px",
          }}
        />
        <div
          className="p-0 float-right position-absolute w-100"
          style={{
            height: "40%",
            backgroundColor: "white",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            bottom: "0",
            border: "gray",
          }}
        />
      </div>
    );
};

export default squareNews;