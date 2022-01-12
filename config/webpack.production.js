const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "hidden-source-map",

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.uglifyJsMinify,
				terserOptions: {
					format: {
						comments: false,
					},
					compress: {
						drop_console: true,
					},
				},
				extractComments: false,
			}),
		],
	},
});
