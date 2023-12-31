const path = require("path")

module.exports = {
    devtool : false,
    entry: "./src/index.js",
    output: {
        filename : "main.js",
        path : path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                "sass-loader"
              ],
            }
        ]
    }
}