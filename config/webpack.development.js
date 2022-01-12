const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PROT || 3000;

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",

	devServer: {
		//contentBase: path.resolve("public"),

		host: HOST,
		port: PORT,

		hot: true,
		historyApiFallback: true,
	},
});
