const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
gulp.task("fileinclude", function () {
  return gulp
    .src(["./src/html/*", "!" + "./src/html/include*"])
    .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
    .pipe(gulp.dest("build/html"));
});

gulp.task("default", gulp.parallel("fileinclude"));
