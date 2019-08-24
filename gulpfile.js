var { del, dest, pipe, task, series, src, watch, parallel } = require("gulp");

var del = require("del");
var nodemon = require("gulp-nodemon");
var ngAnnotate = require("gulp-ng-annotate");
var uglify = require("gulp-uglify");
// var imagemin = require('gulp-imagemin');
var minifyCss = require("gulp-clean-css");
var useref = require("gulp-useref");
var gulpif = require("gulp-if");
var gulpNgConfig = require("gulp-ng-config");

var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

var paths = {
  // Source
  // srcVendorStyles: ['node_modules/materialize-css/dist/css/materialize.css'],
  srcStyles: [
    "node_modules/materialize-css/dist/css/materialize.css",
    "src/styles/**/*.css"
  ],
  distStyles: "styles/",
  srcHTMLIndex: "src/index.html",
  // distHTMLIndex: ,
  srcHTMLPartials: ["src/**/*.html", "!src/index.html"],
  distHTMLPartials: "html/",
  srcVendorScripts: [
    "node_modules/jquery/dist/jquery.js",
    "node_modules/materialize-css/dist/js/materialize.js"
  ],
  srcFrameworkScripts: [
    "node_modules/angular/angular.js",
    "node_modules/angular-ui-router/release/angular-ui-router.js",
    "node_modules/ngmap/build/scripts/ng-map.js",
    "node_modules/angular-ui-router-title/angular-ui-router-title.js"
  ],
  srcAppScripts: [
    "src/scripts/app.js",
    "src/scripts/apikey.js",
    "src/scripts/scripts.js"
  ],
  distAppScripts: "scripts/",
  srcComponentScripts: [
    "src/scripts/components/app_routes.js",
    "src/scripts/components/factory_meta.js",
    "src/scripts/components/factory_litsco.js",
    "src/scripts/components/controller_index.js",
    "src/scripts/components/controller_home.js",
    "src/scripts/components/controller_prods.js",
    "src/scripts/components/controller_productlist.js",
    "src/scripts/components/controller_contact.js",
    "src/scripts/components/controller_supplylist.js",
    "src/scripts/components/controller_supplies.js",
    "src/scripts/components/controller_others.js",
    "src/scripts/components/controller_careers.js"
  ],
  distComponentScripts: "scripts/components",
  srcFonts: "src/fonts/**/*",
  distFonts: "fonts/",
  srcDocs: "src/docs/**/*",
  distDocs: "docs/",
  srcImg: ["src/img/**/*", "!src/img/**/*.svg"],
  srcSvg: ["src/img/**/*.svg"],
  distImg: "img/",
  srcPDF: "src/pdf/**/*",
  distPDF: "pdf/",
  // Dist
  dist: "dist/"
};

// inject Keys
async function envKeys() {
  console.log("--- Making ENV keys ---");
  return await src("apikey.json")
    .pipe(gulpNgConfig("app_litsco.api_key"))
    .pipe(dest("src/scripts"))
    .on("done", function() {
      console.log("done")
    });
}

// HTML
task("copyDevSrcHTMLPartials", function() {
  console.log("---Starting HTML Templates Copy task---");
  return src(paths.srcHTMLPartials).pipe(dest(paths.dist));
});
task("copyDevSrcIndex", function() {
  console.log("---Starting Index Copy & Injection task---");
  return src(paths.srcHTMLIndex)
    .pipe(useref())
    .pipe(gulpif("*.css", minifyCss()))
    .pipe(gulpif("scripts/app.min.js", ngAnnotate()))
    .pipe(gulpif("*.js", uglify()))
    .pipe(dest(paths.dist));
});

// Fonts
function copyDevSrcFonts(cb) {
  console.log("---Starting Fonts Copy task---");
  src(paths.srcFonts).pipe(dest(paths.dist + paths.distFonts));
  return cb();
};

// Assets - DOCS
task("copyDevSrcDocs", function() {
  console.log("---Starting Docs Copy task---");
  return src(paths.srcDocs).pipe(dest(paths.dist + paths.distDocs));
});
// Assets - IMG
task("copyDevSrcImg", function() {
  console.log("---Starting Img Copy task---");
  return (
    src(paths.srcImg)
      // .pipe(imagemin(
      //     {
      //         verbose: true
      //     }))
      // TODO - imagemin creates throw err on production, find out why
      .pipe(dest(paths.dist + paths.distImg))
  );
});
task("copyDevSrcSVG", function() {
  console.log("---Starting SVG Copy task---");
  return src(paths.srcSvg).pipe(dest(paths.dist + paths.distImg));
});
// Assets - PDF
task("copyDevSrcPDF", function() {
  console.log("---Starting PDF Copy task---");
  return src(paths.srcPDF).pipe(dest(paths.dist + paths.distPDF));
});

// Clean
function clean(cb) {
  del.sync(["dist/"]);
  return cb();
}

// Default Build-Copy
function copy() {
  return series(
    "copyDevSrcImg",
    "copyDevSrcSVG",
    "copyDevSrcDocs",
    "copyDevSrcPDF",
    "copyDevSrcHTMLPartials",
    "copyDevSrcIndex"
  );
};

// ENV Setters
function setDevEnv(cb) {
  process.env.NODE_ENV = "development";
  return cb();
}

function setProdEnv(cb) {
  process.env.NODE_ENV = "production";
  return cb();
}

// Static server
function runBrowserSync(cb) {
  runNodemon(cb);

  return browserSync.init(null, {
    proxy: "http://localhost:5000",
    files: ["src/**/*.*"],
    port: 7000,
    notify: false
  });
}

function runNodemon(cb) {
  var started = false;

  nodemon({
    script: "./server.js",
    watch: ["./src/**"],
    ignore: ["gulpfile.js", "node_modules", "dist"],
    ext: "js json html css"
  })
    .on("start", function() {
      // to avoid nodemon being started multiple times
      console.log("starting nodemon");
      if (!started) {
        started = true;
        return cb();
      }
    })
    .on("restart", function() {
      console.log("REstarting nodemon");
      setTimeout(function() {
        reload({ stream: false });
      }, 1000);
    });
  return cb();
}

// Watch Local Dev task
function watchDev(cb) {
  // series(envKeys, "set-dev-node-env", "browser-sync");
  console.log("---Starting DEV Watch task---");
  return watch("src/*.js", { events: "all" }, function(cb) {
    // body omitted
    return cb();
  });
}

exports.dev = series(envKeys, setDevEnv, runBrowserSync, watchDev);

exports.build = series(setProdEnv, clean, envKeys, copyDevSrcFonts, 
  "copyDevSrcImg",
  "copyDevSrcSVG",
  "copyDevSrcDocs",
  "copyDevSrcPDF",
  "copyDevSrcHTMLPartials",
  "copyDevSrcIndex"
);
