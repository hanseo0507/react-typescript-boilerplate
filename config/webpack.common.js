const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	entry: {
		app: path.resolve("src", "index.tsx"),
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		plugins: [new TsconfigPathsPlugin()],
	},

	output: {
		path: path.resolve("build"),
		publicPath: "/",
		filename: "static/js/[name].[fullhash].js",
		chunkFilename: "static/js/bundle.[chunkhash].js",
	},

	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					{
						loader: "ts-loader",
						options: {
							transpileOnly: !isProduction,
							experimentalWatchApi: !isProduction,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							name: "static/img/[name].[hash:7].[ext]",
							limit: 10000, // 10kb
						},
					},
				],
			},
			{
				test: /\.svg?$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: ["file-loader"],
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve("public", "index.html"),
			filename: "index.html",
		}),
		new ForkTsCheckerWebpackPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: isProduction ? "static" : "server",
			openAnalyzer: isProduction,
		}),
	],
};
