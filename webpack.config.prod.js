const path = require("path");
const config = require("./gulpconfig.json");
const aotLoader = require('@ultimate/aot-loader');

module.exports = {
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
            {test: /\.ts$/, use: [
                "@ultimate/aot-loader"
            ]},
            {test: /\.html$/, use: ["raw-loader"]}
        ]
    },
    plugins: [
        new aotLoader.AotPlugin({
            tsConfig: "./tsconfig.json",
            entryModule: './app/scripts/whatoperator.module#WhatOperatorModule'
        })
    ]
};