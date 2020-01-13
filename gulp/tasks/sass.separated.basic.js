module.exports = () => {
  $.gulp.task('sass:separated:basic', () => {
    return $.gulp
      .src(`${$.config.dev}/styles/basic/**/*.scss`)
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.rename({
        suffix: '.basic'
      }))
      .pipe($.gulp.dest(`${$.config.build}/css/Separated`))
      .pipe($.gp.csso())
      .pipe($.gp.rename({
        suffix: '.min'
      }))
      .pipe($.gulp.dest(`${$.config.build}/css/Separated`))
      .pipe($.browserSync.stream());
  });
};
