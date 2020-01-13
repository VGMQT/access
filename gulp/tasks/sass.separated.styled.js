module.exports = () => {
  $.gulp.task('sass:separated:styled', () => {
    return $.gulp
      .src(`${$.config.dev}/styles/styled/**/*.scss`)
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.rename({
        suffix: '.styled'
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
