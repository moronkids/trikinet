gulp.task("assets", function () {
  var postcss = require("gulp-postcss");
  var assets = require("postcss-assets");

  return gulp
    .src("source/*.css")
    .pipe(
      postcss([
        assets({
          loadPaths: ["images/"],
        }),
      ])
    )
    .pipe(gulp.dest("build/"));
});
