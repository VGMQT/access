/* eslint-disable */

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  config: require('./gulp/configs/config'),
  path: {
    tasks: require('./gulp/configs/tasks.js'),
  },

  browserSync: require('browser-sync').create(),
  del: require('del'),
  exec: require('child_process').exec,
  fs: require('fs'),
  merge: require('merge-stream'),
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  'core',
  $.gulp.parallel(
    'pug',
    'css:vendor',
    'sass',
    'sass:separated:basic',
    'sass:separated:styled',
    'js:umd',
    'js:umd:separated',
  )
);

$.gulp.task(
  'build',
  $.gulp.series(
    'clean',
    'js:lint',
    'sass:lint',
    'core'
  )
);

$.gulp.task(
  'default',
  $.gulp.series(
    'build',
    $.gulp.parallel('watch', 'serve')
  )
);
