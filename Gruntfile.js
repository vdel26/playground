'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    autoprefixer: {
      css: {
        src: '*/**/*.css'
      }
    },

    watch: {
      all: {
        files: ['**/*.css', '**/*.html', '**/*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    connect: {
      options: {
          port: 9000,
          livereload: 35729,
          hostname: 'localhost'
      },
      livereload: {
          options: {
              open: true,
              base: [
                  '.tmp',
                  '.'
              ]
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', ['autoprefixer', 'connect:livereload', 'watch']);
};
