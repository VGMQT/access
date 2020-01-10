module.exports = {
  build: './build',
  dev: './dev',
  vendorCSS: [
    './node_modules/normalize.css/normalize.css'
  ],
  vendorJS: [
    './node_modules/@vgmqt/access/build/js/app.min.js'
  ],
  appJS: './dev/js/**/*.js',
  umd: 'AccessibleEssentials'
};
