let environment = {
  plugins: [
    ["postcss-assets",{}],
    ["postcss-inline-svg",{}],
    ["postcss-preset-env",{}],
    // ["postcss-preset-env",{}],
  ],
};

// Only run PurgeCSS in production (you can also add staging here)
if (process.env.mode === "production") {
  environment.plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: [

            // Matcher for haml
        './app/**/*.html.haml'

      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}
module.exports = environment;