An example of using [browserify](http://browserify.org) and browserify-shim to modularize javascript and make it more easily testable.

## Setting up a new project with browserify, gulp and jquery
1. `npm install bower browserify browserify-shim gulp gulp-rename gulp-uglify vinyl-buffer vinyl-source-stream`
2. add `node_modules` to `.gitignore`
3. add some [required json](https://github.com/mikedfunk/browserify-test/blob/master/package.json#L29-L39) to `package.json` to get browserify-shim to work with jquery
4. `bower init` and press enter a bunch of times to create a `bower.json`
5. `bower install --save-dev jquery`
6. add `bower_components` to `.gitignore`
7. create a browserify module in `assets/js/mymodule.js` - [example](https://github.com/mikedfunk/browserify-test/blob/master/assets/js/replace-text.js)
8. create a script that uses it such as `assets/js/app.js` - [example](https://github.com/mikedfunk/browserify-test/blob/master/assets/js/app.js)
9. add a gulpfile.js or just use [this one](https://github.com/mikedfunk/browserify-test/blob/master/gulpfile.js)
10. `gulp` to create the first build
11. include the compiled js file in your html with a script tag
12. If your compiled js is in `assets/cache`, add it to `.gitignore`

## Installation
* `npm install` to get gulp, browserify, bower, etc.
* `bower install` to get jquery
* `gulp build` to compile app.min.js to assets/cache
* load index.html in your browser

## Notes
* there are a few important configs under the browser, browserify and browserify-shim keys in package.json
* browserify cannot stream to another task unless you use vinyl-source-stream to define a source and vinyl-buffer to buffer before continuing.
* sourcemaps are a bit difficult since browserify has it's own sourcemaps it generates via --debug.
