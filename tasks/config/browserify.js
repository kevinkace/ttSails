/**
 * Browserify the things.
 *
 * --------------------------------------------------
 *
 * Description
 *
 */

module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

  grunt.config.set('browserify', {
    js: {
      src : require('../pipeline').browserifyMainFile,
      dest: '.tmp/public/browserify/debug.' + version + '.js'
    }
    // ,
    // options: {
    //   transform: [require('grunt-react').browserify]
    // }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
