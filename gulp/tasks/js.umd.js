module.exports = () => {
  $.gulp.task('js:umd', () => {
    return $.gulp
      .src(`${$.config.build}/js/app.js`)
      .pipe($.gp.umd({
        exports: function (file) {
          return $.config.umd;
        },
        exports: function (file) {
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
