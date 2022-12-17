const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const cssnanoPlugin = require('cssnano');

// PostCSS Configuration Object
module.exports = {
  // Plugins for PostCSS. Each plugin adds functionality to PostCSS as a CSS
  // transformation tool.
  plugins: [
    // The postcss-normalize plugin lets you use parts of normalize.css and
    // sanitize.css that you need from browserslist.
    postcssNormalize,
    // The postcss-preset-env plugin will use the browserslist configuration to
    // add polyfills to CSS bundles; autoprefixer is included in
    // postcss-preset-env.
    postcssPresetEnv,
    // The cssnano plugin is used to minify css bundles.
    cssnanoPlugin({ preset: 'default' })
  ]
};
