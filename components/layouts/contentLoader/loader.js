import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    // width={400}
    height={150}
    // viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="0" rx="0" ry="0" width="114" height="113" />
    <rect x="126" y="7" rx="0" ry="0" width="179" height="15" />
    <rect x="197" y="39" rx="0" ry="0" width="1" height="2" />
    <rect x="127" y="28" rx="0" ry="0" width="179" height="15" />
    <rect x="127" y="51" rx="0" ry="0" width="179" height="15" />
    <rect x="127" y="72" rx="0" ry="0" width="179" height="15" />
    <rect x="127" y="93" rx="0" ry="0" width="179" height="15" />
  </ContentLoader>
);

export default MyLoader;
