module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp
      .src([`${$.config.dev}/styles/AccessEssentials.basic.scss`, `${$.config.dev}/styles/AccessEssentials.styled.scss`])
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer())
      .pipe($.gulp.dest(`${$.config.build}/css`))
      .pipe($.gp.csso())
      .pipe($.gp.rename({
        suffix: '.min'
      }))
      .pipe($.gulp.dest(`${$.config.build}/css`))
      .pipe($.browserSync.stream());
  });
};
