// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const sourceMapLoaderRule = webpackConfig.module.rules.find(
        (rule) =>
          rule.enforce === "pre" && rule.use?.includes("source-map-loader")
      );

      if (sourceMapLoaderRule) {
        sourceMapLoaderRule.exclude = /node_modules\/react-datepicker/;
      }

      return webpackConfig;
    },
  },
};
