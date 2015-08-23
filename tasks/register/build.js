// jshint node:true
"use strict";

module.exports = function (grunt) {
    grunt.registerTask("build", [
        "compileAssets",
        "linkAssetsBuild",
        "clean:build",
        "copy:build"
    ]);
};
