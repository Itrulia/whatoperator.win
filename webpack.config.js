const path = require("path");
const config = require("./gulpconfig.json");

module.exports = {
    cache: true,
    watch: true,
    devtool: "source-map",
    entry: {
        ts: path.resolve(__dirname, "app/scripts/main.ts")
    },
    output: {
        path: __dirname + "/" + config.paths.typescript.dist,
        filename: "app.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            "node_modules"
        ],
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.ts$/, use: ["awesome-typescript-loader?useCache=true", "angular2-template-loader"]},
            {test: /\.html$/, use: ["raw-loader"]}
        ]
    },
    plugins: []
};