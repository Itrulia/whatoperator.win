// Core
const path = require("path");

// Frameworks
const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const swPrecache = require("sw-precache");

// Browser Sync
const browserSync = require("browser-sync").create();
const modRewrite = require("connect-modrewrite");
const reload = browserSync.reload;

// Config
const config = require("./gulpconfig");
const postProcessor = [
    require("postcss-zindex"),
    require("autoprefixer")({browsers: ["last 1 version"]})
];

// Util
const del = require("del");
const sequence = require("run-sequence").use(gulp);
const $ = require("gulp-load-plugins")();
const isProd = process.env.NODE_ENV !== "production";

//////////////////////////////////////////
/// Util
//////////////////////////////////////////

gulp.task("clean", function () {
    return del(["dist/*", "!dist/.git"], {dot: true});
});

//////////////////////////////////////////
/// Lint
//////////////////////////////////////////

gulp.task("scripts:lint", function () {
    gulp.src(config.paths.typescript.watch)
        .pipe($.tslint({
            configuration: "tslint.json"
        }))
        .pipe($.tslint.report($.tslintStylish, {
            emitError: false,
            sort: true,
            bell: true,
            fullPath: true
        }));
});

gulp.task("styles:lint", function () {
    return gulp.src(config.paths.styles.watch)
        .pipe($.plumber())
        .pipe($.postcss([
            require("stylelint")(),
            require("postcss-reporter")({clearMessages: true, throwError: false})
        ], {syntax: require("postcss-scss")}));
});

gulp.task("lint", function() {
    sequence("scripts:lint", "styles:lint");
});

//////////////////////////////////////////
/// CSS
//////////////////////////////////////////

gulp.task("styles", function () {
    return gulp.src(config.paths.styles.app)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass().on("error", $.sass.logError))
        .pipe($.postcss(postProcessor))
        .pipe($.cleanCss())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(config.paths.styles.dist))
        .pipe($.size({title: "styles"}))
        .pipe(browserSync.stream());
});


//////////////////////////////////////////
/// IMAGES
//////////////////////////////////////////

gulp.task("images", function () {
    return gulp.src(config.paths.images.app)
        .pipe($.plumber())
        // .pipe($.imageResize({
        //     width : 125,
        //     height : 125,
        //     crop : true,
        //     upscale : false,
        //     imageMagick: true
        // }))
        .pipe($.imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest(config.paths.images.dist))
        .pipe($.size({title: "images"}))
        .pipe(browserSync.stream());
});

//////////////////////////////////////////
/// JavaScript
//////////////////////////////////////////
const webpackDevConfig = require("./webpack.config");

const webpackProdConfig = require("./webpack.config.prod");
webpackProdConfig.plugins = webpackProdConfig.plugins.concat(
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
);

gulp.task("typescript", ["scripts:lint"], function (callback) {
    if (isProd) {
        webpack(webpackProdConfig, function(err, stats) {
            if (err) {
                throw new gutil.PluginError("webpack:build", err);
            }

            gutil.log("[webpack:build]", stats.toString({colors: true}));
            callback();
        });
    } else {
        webpack(webpackDevConfig, function(err, stats) {
            if (err) {
                throw new gutil.PluginError("webpack:build", err);
            }

            reload();
            gutil.log("[webpack:build]", stats.toString({colors: true, chunks: false}));
        });
    }
});

//////////////////////////////////////////
/// Web-/Service Worker
//////////////////////////////////////////

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task("service-worker-scripts", function() {
    return gulp.src(["node_modules/sw-toolbox/sw-toolbox.js"])
        .pipe(gulp.dest(config.paths.workers.dist));
});

gulp.task("service-worker", ["service-worker-scripts"], function () {
    const rootDir = config.paths.workers.app;
    const filepath = path.join(config.paths.workers.dist, "service-worker.js");

    return swPrecache.write(filepath, {
        cacheId: "whatoperator",

        importScripts: [
            config.paths.workers.dist + "/sw-toolbox.js"
        ],

        staticFileGlobs: [
            rootDir + "/scripts/**/*.js",
            rootDir + "/styles/**/*.css",
            rootDir + "/images/*.png",
            "./200.html"
        ],

        runtimeCaching: []
    });
});

//////////////////////////////////////////
/// Watch / Build
//////////////////////////////////////////

gulp.task("watch", function () {
    browserSync.init({notify: false, server: ["./"], offline: true, middleware: [
        modRewrite([
            "!\\.\\w+$ /200.html [L]"
        ])
    ]});

    gulp.watch(config.paths.typescript.watch, ["scripts:lint"]);
    gulp.watch(config.paths.styles.watch, ["styles:lint", "styles"]);
    gulp.watch(config.paths.images.watch, ["images"]);
    gulp.watch("index.html").on("change", reload);
});

gulp.task("default", ["clean"], function (done) {
    return sequence(["typescript", "styles", "images"], done);
});
