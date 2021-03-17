import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    // width={400}
    height={160}
    // viewBox="0 0 400 160"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="120" height="120" />
    <rect x="143" y="0" rx="0" ry="0" width="188" height="16" />
    <rect x="143" y="20" rx="0" ry="0" width="188" height="16" />
    <rect x="143" y="40" rx="0" ry="0" width="188" height="16" />
    <rect x="143" y="60" rx="0" ry="0" width="188" height="16" />
    <rect x="143" y="80" rx="0" ry="0" width="188" height="16" />
    <rect x="143" y="100" rx="0" ry="0" width="188" height="16" />
  </ContentLoader>
);

export default MyLoader;
