module.exports = {
  plugins: [
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    ["postcss-assets",{}],
    ["postcss-inline-svg",{}],
    ["postcss-preset-env",{}],
    // ["postcss-preset-env",{}],
  ],
};
