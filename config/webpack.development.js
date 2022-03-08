const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { HOST, PORT } = process.env;

if (!PORT)
  throw new Error("Can not found PORT in environment variables. Check your .env file process.env.PORT is exist");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve("public"),
    },
    host: HOST,
    port: PORT,
    hot: true,
    historyApiFallback: true,
  },
});
