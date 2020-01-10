module.exports = () => {
  $.gulp.task('js:umd', () => {
    return $.gulp
      .src(`${$.config.build}/js/app.min.js`)
      .pipe($.gp.umd())
      .pipe($.gulp.dest(`${$.config.build}/js/umd`));
  });
};
