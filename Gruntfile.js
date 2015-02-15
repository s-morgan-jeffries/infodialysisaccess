// jshint node: true
'use strict';

module.exports = function (grunt) {
  var projectConfig = {
    // configurable paths
    temp: '.tmp',
    dist: 'dist',
    localAssets: 'src',
    sharedAssets: 'node_modules/fresenius-assets/dist'
  };

  var configureTasks = require('grunt-fresenius-tasks');
  configureTasks(grunt, projectConfig);

  grunt.loadNpmTasks('grunt-bump');


  grunt.config.merge({
    //////////////////////////////////////////////
    // Bump
    //////////////////////////////////////////////
    bump: {
      options: {
        files: ['bower.json', 'package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['bower.json', 'package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        // NEVER change this.
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }
  });

};
