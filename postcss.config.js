import postcssNormalize from 'postcss-normalize';
import postcssPresetEnv from 'postcss-preset-env';
import cssnanoPlugin from 'cssnano';

// PostCSS Configuration Object
export default {
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
