"use strict";

// bring in dependencies. this file will be compiled with browserify.
var replaceText = require('./replace-text');
var $ = require('jquery');

// jquery document.ready
$(function() {
  replaceText($('h1'), 'Hello World!');
});
