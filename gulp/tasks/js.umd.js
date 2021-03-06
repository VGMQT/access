module.exports = () => {
  $.gulp.task('js:umd', () => {
    return $.gulp
      .src($.config.umdJS)
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.concat('AccessEssentials.js'))
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
      .pipe($.gulp.dest(`${$.config.build}/js`));
  });
};
