const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html", function () {
  return gulp
    .src("*.html")
    .pipe(
      htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});


gulp.task("images", function () {
    return gulp
      .src("images/*.{jpg,png,gif}")
      .pipe(gulp.dest("dist/images"))
      .pipe(connect.reload());
  });

gulp.task("scripts", function () {
    return gulp
      .src(["javascript/*.js", "!gulpfile.js"])
      .pipe(gulp.dest("dist/js"))
      .pipe(connect.reload());
  });

const scss = require("gulp-sass");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
//如果要压缩css代码，一个scss一个任务
gulp.task("index-scss", function () {
  return gulp
    .src("scss/shouye.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("shouye.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("index1-scss", function () {
  return gulp
    .src("scss/approve.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("approve.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("index2-scss", function () {
  return gulp
    .src("scss/chanpin.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("chanpin.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("index3-scss", function () {
  return gulp
    .src("scss/shopping.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("shopping.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("index4-scss", function () {
  return gulp
    .src("scss/denglu.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("denglu.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("index5-scss", function () {
  return gulp
    .src("scss/zhuce.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("zhuce.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});


gulp.task("data", function () {
    return gulp
      .src(["data/*.json", "!package.json"])
      .pipe(gulp.dest("dist/data"))
      .pipe(connect.reload());
  });

  gulp.task(
    "build",
    ["copy-html", "images", "scripts", "data", "index-scss"],
    function () {
      console.log("项目建立成功");
    }
  );


  gulp.task("watch", function () {
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/*.{jpg,png}", ["images"]);
    gulp.watch(["javascript/*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["data/*.json", "!package.json"], ["data"]);
    gulp.watch("scss/shouye.scss", ["index-scss"]);
    gulp.watch("scss/chanpin.scss", ["index2-scss"]);
    gulp.watch("scss/shopping.scss", ["index3-scss"]);
    gulp.watch("scss/denglu.scss", ["index4-scss"]);
    gulp.watch("scss/zhuce.scss", ["index5-scss"]);
  });

const connect = require("gulp-connect");
gulp.task("server", function () {
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true,
  });
});

gulp.task("default", ["watch", "server"]);