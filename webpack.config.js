module.exports = {
    entry: "./src/main.js",
    output: {
        path: "/home/avelino/DDrive/githubprojects/learningReact/dist/assets",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    }
}