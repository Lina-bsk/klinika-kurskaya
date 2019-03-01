"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("style", function () {
  return gulp.src([
    "source/libs/bootstrap-4.2.1/dist/css/bootstrap.min.css",
    "source/libs/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css",
    "source/libs/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css",
    "source/libs/fancybox-master/dist/jquery.fancybox.min.css",
    "build/css/style.min.css"
  ])
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("build/css"))
});


gulp.task("clean", function () {
  return del("build");
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
      ]))
  .pipe(gulp.dest("build/img/"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
  // .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
});

gulp.task("js", function () {
  return gulp.src([
    "source/libs/jquery-3.3.1.min.js",
    "source/libs/bootstrap-4.2.1/dist/js/bootstrap.min.js",
    "source/libs/popper.js/dist/umd/popper.min.js",
    "source/libs/OwlCarousel2-2.3.4/dist/owl.carousel.min.js",
    "source/libs/jquery.maskedinput.min.js",
    "source/libs/fancybox-master/dist/jquery.fancybox.min.js",
    "source/js/script.js"
  ])
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("clean", "copy", "css", "style", "html", "js"));
gulp.task("start", gulp.series("build", "server"));
