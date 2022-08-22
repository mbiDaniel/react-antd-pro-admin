const CracoLessPlugin = require("craco-less");
const path = require('path')

const resolve = (paths) => path.resolve(__dirname, 'src', paths);
module.exports = {
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {

    alias: {
      '@pages': resolve('pages'),
      '@routes': resolve('routes'),
      '@context': resolve('context'),
      '@constants': resolve('constants'),
      '@helpers': resolve('helpers'),
      '@components': resolve('components'),
      '@api': resolve('apiClient'),
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
