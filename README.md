An example of using [browserify](http://browserify.org) and browserify-shim to modularize javascript and make it more easily testable.

## Installation
* `npm install` to get gulp, browserify, bower, etc.
* `bower install` to get jquery
* `gulp build` to compile app.min.js to assets/cache
* load index.html in your browser

## Notes
* there are a few important configs under the browser, browserify and browserify-shim keys in package.json
* browserify cannot stream to another task unless you use vinyl-source-stream to define a source and vinyl-buffer to buffer before continuing.
* sourcemaps are a bit difficult since browserify has it's own sourcemaps it generates via --debug.
