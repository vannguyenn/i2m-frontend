const path = require("path");
const withPlugins = require("next-compose-plugins");
const typescriptPlugin = require("@zeit/next-typescript");
const lessPlugin = require("@zeit/next-less");
const cssPlugin = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withPlugins(
  [
    cssPlugin,
    [
      lessPlugin,
      {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    ],
    typescriptPlugin
  ],
  {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.+(js|jsx|ts|tsx)$/,
        loader: options.defaultLoaders.babel,
        include: [/packages/],
        exclude: [/node_modules/]
      });

      config.module.rules.push({
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: "url-loader",
        include: [/packages/],
        exclude: [/node_modules/]
      });

      return config;
    },
    env: {
      NEXT_APP_API_KEY:
        "tCykMvc2PgGYkG9jvAq76IvjJUmHPd3QWev35XxfidWkx1gB63UVSp4PLQpydsoweofAyYvVOirG9nyw"
    }
  }
);
