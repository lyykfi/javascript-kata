const path = require("path");

module.exports = {
	mode: "development",
	entry: [
		"./src/index.tsx",
 		path.resolve(__dirname, './node_modules/antd/dist/antd.css'),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.ts|tsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		modules: ["src", "node_modules"],
		extensions: ['.ts', '.tsx', '.json', '.js']
	},
	devServer: {
		contentBase: [
			path.join(__dirname, "dist"),
			path.join(__dirname, "data"),
			path.join(__dirname, "static")
		],
		compress: true,
		port: 9000
	}
};
