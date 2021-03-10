import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={500}
    height={400}
    viewBox="0 0 510 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="0" rx="0" ry="0" width="448" height="327" />
  </ContentLoader>
);

export default MyLoader;
