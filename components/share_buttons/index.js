import React from 'react';

const Share = (props) => {
    return (
      <>
        <div className={"boxShare " + props.class}>
          <div className="col-3 m-0 p-0 py-2 w-100 h-100">
            <div
              className="d-flex mx-2 style w-auto h-100 "
              style={{ backgroundColor: "#2BCC63", borderRadius: "5px" }}
            >
              <div className="whatsApp my-auto ml-2 mx-auto" />
              <span className="my-auto pl-1 d-none d-sm-block">Share</span>
            </div>
          </div>
          <div className="col-3 my-auto w-100 h-100 m-0 p-0 py-2">
            {" "}
            <div
              className="d-flex mx-2 style w-auto h-100"
              style={{ backgroundColor: "#3A5EA6", borderRadius: "5px" }}
            >
              <div className="fb my-auto ml-2 mx-auto" />
              <span className="my-auto pl-1 d-none d-sm-block">Share</span>
            </div>
          </div>
          <div className="col-3 m-0 p-0 py-2 w-100 h-100">
            <div
              className="d-flex mx-2 style w-auto h-100"
              style={{ backgroundColor: "#1db7eb", borderRadius: "5px" }}
            >
              <div className="twitter my-auto ml-2 mx-auto" />
              <span className="my-auto pl-1 d-none d-sm-block">Tweet</span>
            </div>
          </div>
          <div className="col-3 my-auto w-100 h-100 m-0 p-0 py-2">
            <div
              className="d-flex mx-2 style w-auto h-100"
              style={{ backgroundColor: "#cc0300", borderRadius: "5px" }}
            >
              <div className="flip my-auto ml-2 mx-auto" />
              <span className="my-auto pl-1 d-none d-sm-block">Flip</span>
            </div>
          </div>
        </div>
      </>
    );
};

export default Share;