module.exports = () => {
  $.gulp.task('js:umd:separated', () => {
    return $.gulp
      .src($.config.umdJSSeparated)
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.umd({
        exports: function (file) {
          return $.config.umd;
        },
        namespace: function (file) {
          return $.config.umd;
        },
      }))
      .pipe(
        $.gp.minify({
          ext: {
            min: '.min.js',
          }
        })
      )
      .pipe($.gulp.dest(`${$.config.build}/js/Separated`));
  });
};
