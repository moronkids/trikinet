// const withPWA = require("next-pwa");
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//     images: {
//       domains: ["spiderman.trikinet.com"],
//     },
//   },
// });

module.exports = {
  images: {
    domains: ["spiderman.trikinet.com"],
  },
};

