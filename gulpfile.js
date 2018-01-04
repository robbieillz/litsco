var gulp = require('gulp');
var order = require('gulp-order');
var del = require('del');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

var paths = {
    // Source
    srcVendorStyles: ['node_modules/materialize-css/dist/css/materialize.css'],
    srcStyles: 'src/css/**/*.css',
    distStyles: '/css',
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
    srcImg: 'src/img/**/*',
    distImg: 'img/',
    srcPDF: 'src/pdf/**/*',
    distPDF: 'pdf/',
    // Dist
    dist: 'dist/',
    distScriptsHTML: './dist.prod/html',
    distScriptsProd: './dist.prod/scripts',
    distStylesProd: './dist.prod/css',
    distAssetsProd: './dist.prod/assets',
    scriptsDevServer: 'devServer/**/*.js'
};

// // Styles
// gulp.task('watchDevSrcVendorStyles', function () {
//     console.log('---Starting Vendor Styles task---');
//     return gulp.src(paths.srcVendorStyles)
//         // .pipe(browserSync.stream())
//         // .pipe(gulp.dest('dist'))
//         // .pipe(livereload());
// });
// gulp.task('watchDevSrcStyles', function () {
//     console.log('---Starting Gen Styles task---');
//     return gulp.src(paths.srcStyles)
//     .pipe(gulp.dest(paths.dist + paths.distStyles))
//     // .pipe(browserSync.stream())
//         // .pipe(livereload()); 
// });

// // Scripts
// gulp.task('watchDevSrcVendorScripts', function () {
//     console.log('---Starting Vendor Scripts Watch task---');
//     return gulp.src(paths.srcVendorScripts)
//         // .pipe(browserSync.stream())
//     // .pipe(gulp.dest('dist'))
//         // .pipe(livereload());
// });
// gulp.task('watchDevSrcFrameworkScripts', function () {
//     console.log('---Starting Framework Scripts Watch task---');
//     return gulp.src(paths.srcFrameworkScripts)
//         // .pipe(browserSync.stream())
//     // .pipe(gulp.dest('dist'))
//         // .pipe(livereload());
// });
// gulp.task('watchDevSrcAppScripts', function () {
//     console.log('---Starting App Scripts Watch task---');
//     return gulp.src(paths.srcAppScripts)
//     .pipe(gulp.dest(paths.dist + paths.distAppScripts))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });
// gulp.task('watchDevSrcComponentScripts', function () {
//     console.log('---Starting App Scripts Watch task---');
//     return gulp.src(paths.srcComponentScripts)
//     .pipe(gulp.dest(paths.dist + paths.distComponentScripts))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });

// // HTML
// gulp.task('watchDevSrcIndex', function () {
//     console.log('---Starting Index Watch task---');
//     return gulp.src(paths.srcHTMLIndex)
//     .pipe(gulp.dest(paths.dist))
//     .pipe(browserSync.stream())
//         // .pipe(livereload());
// });
// gulp.task('watchDevSrcHTMLPartials', function () {
//     console.log('---Starting Index Templates Watch task---');
//     return gulp.src(paths.srcHTMLPartials)
//     .pipe(gulp.dest(paths.dist + paths.distHTMLPartials))
//     // .pipe(browserSync.stream())
//         // .pipe(livereload());
// });

// // Fonts
// gulp.task('watchDevSrcFonts', function () {
//     console.log('---Starting Fonts Watch task---');
//     return gulp.src(paths.srcFonts)
//     .pipe(gulp.dest(paths.dist + paths.distFonts))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });

// // Assets - DOCS
// gulp.task('watchDevSrcDocs', function () {
//     console.log('---Starting Docs Watch task---');
//     return gulp.src(paths.srcDocs)
//     .pipe(gulp.dest(paths.dist + paths.distDocs))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });
// // Assets - IMG
// gulp.task('watchDevSrcImg', function () {
//     console.log('---Starting Img Watch task---');
//     return gulp.src(paths.srcImg)
//     .pipe(gulp.dest(paths.dist + paths.distImg))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });
// // Assets - PDF
// gulp.task('watchDevSrcPDF', function () {
//     console.log('---Starting PDF Watch task---');
//     return gulp.src(paths.srcPDF)
//     .pipe(gulp.dest(paths.dist + paths.distPDF))
//     // .pipe(browserSync.stream())
//     // .pipe(livereload());
// });


// // Clean
// gulp.task('clean', function () {
//     return del.sync([
//             // .pipe(browserSync.stream())
//         'dist/'
//     ]);
// });

// // Default
// gulp.task('copy', [
//     'watchDevSrcVendorStyles',
//     'watchDevSrcStyles',
//     'watchDevSrcVendorScripts',
//     'watchDevSrcFrameworkScripts',
//     'watchDevSrcAppScripts',
//     'watchDevSrcComponentScripts',
//     'watchDevSrcIndex',
//     'watchDevSrcHTMLPartials',
//     'watchDevSrcFonts',
//     'watchDevSrcDocs',
//     'watchDevSrcImg',
//     'watchDevSrcPDF'
// ], function (done) {
//     browserSync.reload();
//     done();
// 	console.log('---Starting Copy task---');
// });

// ENV Setters
gulp.task('set-dev-node-env', function() {
    process.env.NODE_ENV = 'development';
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
        ignore: [
            'gulpfile.js',
            'node_modules/'
          ]
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
    })
    .on('restart', function () {
        setTimeout(function () {
          reload({ stream: false });
        }, 1000);
      });
});

// Watch Local Dev task
gulp.task('watch', ['set-dev-node-env', 'browser-sync'], function () {
    console.log('---Starting DEV Watch task---');
    gulp.watch(['./src/**/*.*'], reload);    
});

//Build for production
gulp.task('build', ['set-prod-node-env'], function() {

});
