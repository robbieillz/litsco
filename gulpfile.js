var gulp = require('gulp');
var del = require('del');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-clean-css');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
    // Source
    // srcVendorStyles: ['node_modules/materialize-css/dist/css/materialize.css'],
    srcStyles: [
        'node_modules/materialize-css/dist/css/materialize.css',
        'src/styles/**/*.css'
    ],
    distStyles: 'styles/',
    srcHTMLIndex: 'src/index.html',
    // distHTMLIndex: ,
    srcHTMLPartials: ['src/**/*.html', '!src/index.html'],
    distHTMLPartials: 'html/',
    srcVendorScripts: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/materialize-css/dist/js/materialize.js'
    ],
    srcFrameworkScripts: [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/ngmap/build/scripts/ng-map.js',
        'node_modules/angular-ui-router-title/angular-ui-router-title.js',
    ],
    srcAppScripts: [
        'src/scripts/app.js',
        'src/scripts/scripts.js'
    ],
    distAppScripts: 'scripts/',
    srcComponentScripts: [
        'src/scripts/components/app_routes.js',
        'src/scripts/components/factory_meta.js',
        'src/scripts/components/factory_litsco.js',
        'src/scripts/components/controller_index.js',
        'src/scripts/components/controller_home.js',
        'src/scripts/components/controller_prods.js',
        'src/scripts/components/controller_productlist.js',
        'src/scripts/components/controller_contact.js',
        'src/scripts/components/controller_supplylist.js',
        'src/scripts/components/controller_supplies.js',
        'src/scripts/components/controller_others.js',
        'src/scripts/components/controller_careers.js'
    ],
    distComponentScripts: 'scripts/components',
    srcFonts: 'src/fonts/**/*',
    distFonts: 'fonts/',
    srcDocs: 'src/docs/**/*',
    distDocs: 'docs/',
    srcImg: ['src/img/**/*', '!src/img/**/*.svg'],
    srcSvg: ['src/img/**/*.svg'],
    distImg: 'img/',
    srcPDF: 'src/pdf/**/*',
    distPDF: 'pdf/',
    // Dist
    dist: 'dist/'
};

// HTML
gulp.task('copyDevSrcHTMLPartials', function () {
    console.log('---Starting HTML Templates Copy task---');
    return gulp.src(paths.srcHTMLPartials)
    .pipe(gulp.dest(paths.dist));
});
gulp.task('copyDevSrcIndex', function () {
    console.log('---Starting Index Copy & Injection task---');
    return gulp.src(paths.srcHTMLIndex)
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('scripts/app.min.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest(paths.dist));
});

// Fonts
gulp.task('copyDevSrcFonts', function () {
    console.log('---Starting Fonts Copy task---');
    return gulp.src(paths.srcFonts)
    .pipe(gulp.dest(paths.dist + paths.distFonts));
});

// Assets - DOCS
gulp.task('copyDevSrcDocs', function () {
    console.log('---Starting Docs Copy task---');
    return gulp.src(paths.srcDocs)
    .pipe(gulp.dest(paths.dist + paths.distDocs));
});
// Assets - IMG
gulp.task('copyDevSrcImg', function () {
    console.log('---Starting Img Copy task---');
    return gulp.src(paths.srcImg)
        .pipe(imagemin(
            {
                verbose: true
            }))
        .pipe(gulp.dest(paths.dist + paths.distImg));
});
gulp.task('copyDevSrcSVG', function () {
    console.log('---Starting SVG Copy task---');
    return gulp.src(paths.srcSvg)
    .pipe(gulp.dest(paths.dist + paths.distImg));
});
// Assets - PDF
gulp.task('copyDevSrcPDF', function () {
    console.log('---Starting PDF Copy task---');
    return gulp.src(paths.srcPDF)
    .pipe(gulp.dest(paths.dist + paths.distPDF));
});

// Clean
gulp.task('clean', function () {
    return del.sync([
        'dist/'
    ]);
});

// Default Build-Copy
gulp.task('copy', [
    'copyDevSrcImg',
    'copyDevSrcSVG',
    'copyDevSrcDocs',
    'copyDevSrcPDF',
    'copyDevSrcHTMLPartials',
    'copyDevSrcIndex',
], function (done) {
    done();
	console.log('---Finished Copy task---');
});

// ENV Setters
gulp.task('set-dev-node-env', function() {
    process.env.NODE_ENV = 'development';
    return;
});

gulp.task('set-prod-node-env', function() {
    process.env.NODE_ENV = 'production';
    return;
});

// Static server
gulp.task('browser-sync',  ['nodemon'], function () {
    browserSync.init(null, {
		proxy: 'http://localhost:5000',
        files: ['src/**/*.*'],
        port: 7000, 
        notify: false
	});
});

gulp.task('nodemon', function (cb) {
	var started = false;
	
	return nodemon({
        script: './server.js',
        watch: ['./src/**'],
        ignore: [
            'gulpfile.js',
            'node_modules',
            'dist'
          ],
          ext: "js json html css"
	}).on('start', function () {
        // to avoid nodemon being started multiple times
        console.log('starting nodemon');
		if (!started) {
			cb();
			started = true; 
		} 
    })
    .on('restart', function () {
        console.log('REstarting nodemon');
        setTimeout(function () {
          reload({ stream: false });
        }, 1000);
      });
});

// Watch Local Dev task
gulp.task('watch', [
    'set-dev-node-env', 
    'browser-sync'
], function () {
    console.log('---Starting DEV Watch task---');
    gulp.watch(['./src/**/*.*'], reload);    
});

//Build for production
gulp.task('build', [
    // 'set-prod-node-env', 
    'clean',
    'copyDevSrcFonts',
    'copy'
], function() {
    console.log('---Starting production BUILD task---')
});
