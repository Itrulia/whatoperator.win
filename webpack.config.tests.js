const path = require("path");

module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "tests"),
            "node_modules"
        ],
        extensions: [".ts", ".js", ".json"]
    },
    entry: {
        ts: path.resolve(__dirname, "tests/tests.bundle.ts")
    },
    module: {
        rules: [
            {test: /\.ts$/, use: ["awesome-typescript-loader?useCache=true"]},
            {test: /\.html$/, use: ["raw-loader"]}
        ]
    }
};