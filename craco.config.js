const CracoLessPlugin = require("craco-less");

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
    alias: {},
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
