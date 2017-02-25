module.exports = function(karma) {
    "use strict";

    karma.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            { pattern: "./tests/tests.bundle.ts", watched: false }
        ],
        preprocessors: {
            "./tests/**/*.ts": ["webpack", "coverage", "sourcemap"]
        },
        reporters: ["mocha", "coverage"],
        coverageReporter: {
            dir: "tests/coverage/",
            reporters: [
                { type: "text-summary" },
                { type: "json" },
                { type: "html" }
            ]
        },
        browsers: ["PhantomJS"],
        port: 9018,
        runnerPort: 9101,
        colors: true,
        logLevel: karma.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity,
        webpackServer: { noInfo: true, quiet: true },
        webpackMiddleware: { noInfo: true, quiet: true },
        webpack: require("./webpack.config.tests")
    });
};