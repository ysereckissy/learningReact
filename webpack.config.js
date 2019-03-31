const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: "/home/avelino/DDrive/githubprojects/learningReact/dist/assets",
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}