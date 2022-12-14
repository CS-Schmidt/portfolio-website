import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const thisFileDirPath = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const maxInlineSize = 8192; // Maximum inlining assets size in KB

// Webpack Config Object
export default {
  // The mode parameter enables webpack's built-in optimizations for each
  // possible environment.
  mode: isProduction ? 'production' : 'development',
  // Instructs webpack to generate runtime code for a specific environment.
  target: 'web',
  // Controls what bundle information gets displayed to the console at build
  // time.
  stats: 'normal',
  // The base directory, an absolute path, for resolving entry points and
  // loaders from the configuration.
  context: thisFileDirPath,
  // An entry point indicates which module Webpack should use to begin
  // building out its internal dependency graph.
  entry: {
    index: join(thisFileDirPath, 'src/index.jsx')
  },
  // The output property tells webpack where to emit the bundles it creates and
  // how to name these files.
  output: {
    // Sets the path that webpack builds to.
    path: join(thisFileDirPath, 'dist/'),
    // Tells webpack if it should include comments in bundles with information
    // about contained modules.
    pathinfo: !isProduction,
    // This option specifies the public URL of the output directory when
    // referenced in a browser. The value of the option is prefixed to every URL
    // created by the runtime or loaders.
    publicPath: 'auto',
    // Sets the filename of "initial" chunk files.
    filename: isProduction
      ? '[name].[contenthash].bundle.js'
      : '[name].bundle.js',
    // Sets the filename of "non-initial" chunk files.
    chunkFilename: isProduction
      ? '[name].[contenthash].bundle.js'
      : '[name].bundle.js',
    // Sets the name of asset modules.
    // assetModuleFilename: 'assets/[name].[hash][ext]',
    // Controls "cleaning" of the output directory before each build.
    clean: true
  },
  // Alters how modules are resolved.
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  // Sets configuration for webpack-dev-server tool.
  devServer: {
    port: 8080,
    // Enables gzip compression for everything served.
    compress: true,
    // Opens default browser after the server has been started.
    open: ['index.bundle.html'],
    // Enables webpack's Hot Module Replacement (HMR) feature. HMR is exchanges,
    // adds, or removes modules while an application is running, without a full
    // reload.
    hot: true,
    client: {
      // Sets logging level from server in client's browser.
      logging: 'info'
    }
  },
  // Controls if and how source maps are generated.
  devtool: isProduction ? false : 'eval-source-map',
  // The module property determines how the different kinds of "modules" within
  // a project will be treated.
  module: {
    rules: [
      // NOTE: babel-loader could be a source of bloated code bundles or slow builds
      {
        test: /\.([cm]js|js?x)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: join(thisFileDirPath, 'babel.config.cjs')
            }
          }
        ]
      },
      {
        test: /.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /.glsl$/i,
        type: 'asset/source'
      },
      {
        test: /\.(bmp|webp|gif|jpeg|png|svg|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: maxInlineSize
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: maxInlineSize
          }
        }
      }
    ]
  },
  plugins: isProduction
    ? // Production mode plugin configuration.
      [
        new HtmlWebpackPlugin({
          filename: '[name].[contenthash].bundle.html',
          template: join(thisFileDirPath, 'src/index.html')
        }),
        new MiniCSSExtractPlugin({
          filename: '[name].[contenthash].bundle.css',
          chunkFilename: '[name].[contenthash].bundle.css'
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: join(thisFileDirPath, 'log/build-report.html'),
          openAnalyzer: false
        })
      ]
    : // Development mode plugin configuration
      [
        new HtmlWebpackPlugin({
          filename: '[name].bundle.html',
          template: join(thisFileDirPath, 'src/index.html')
        }),
        new MiniCSSExtractPlugin({
          filename: '[name].bundle.css',
          chunkFilename: '[name].bundle.css'
        }),
        new ReactRefreshWebpackPlugin()
      ]
};
