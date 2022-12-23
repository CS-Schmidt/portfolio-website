const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';

// Babel Configuration Object
module.exports = {
  // Plugins are configured here. Babel's code transformations are enabled by
  // applying plugins (or presets) to your configuration file. Plugins run
  // before presets and are loaded from last to first.
  plugins: isProduction
    ? ['@babel/plugin-transform-runtime']
    : ['react-refresh/babel'],
  // Presets are declared here. Each acts as a sharable set of Babel plugins
  // and/or config options. Presets are loaded from last to first, after
  // plugins.
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.22.8',
        configPath: resolve('.browserslistrc')
      }
    ],
    '@babel/preset-react'
  ]
};
