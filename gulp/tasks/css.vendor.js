module.exports = () => {
  $.gulp.task('css:vendor', () => {
    return $.gulp
      .src($.config.vendorCSS)
      .pipe($.gp.concatCss('vendor.css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename('vendor.min.css'))
      .pipe($.gulp.dest(`${$.config.build}/css`))
      .pipe($.browserSync.stream());
  });
};
