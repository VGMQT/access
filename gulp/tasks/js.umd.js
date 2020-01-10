module.exports = () => {
  $.gulp.task('js:umd', () => {
    return $.gulp
      .src($.config.appJS)
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.concat('app.js'))
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
          },
          noSource: true,
        })
      )
      .pipe($.gulp.dest(`${$.config.build}/js`));
  });
};
