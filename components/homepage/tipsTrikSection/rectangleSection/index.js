import React from "react";

const RectangelSection = () => {
  return (
    <>
      <div
        className="m-0 p-0 col-8 mx-auto mb-3"
        style={{
          borderRadius: "5px",
          height: "368px",
          backgroundColor: "white",
          border: "1px solid gray",
        }}
      >
        <div
          className="p-0 float-left position-absolute h-100"
          style={{
            width: "40%",
            backgroundColor: "white",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <div
          className="p-0 float-right position-absolute h-100"
          style={{
            width: "60%",
            backgroundColor: "gray",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            right: "0",
            border: "1pxgray",
          }}
        />
      </div>
    </>
  );
};

export default RectangelSection;
