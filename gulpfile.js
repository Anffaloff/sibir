"use strict";

const {src, dest} = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const panini = require("panini");
const removeComments = require("strip-css-comments");
