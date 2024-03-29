module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dir: {
      build: 'build',
      temp: '.tmp',
      src: 'src'
    },
    files: {
      src: '<%= dir.src %>{,*/}*.js',
      spec: '<%= dir.spec %>{,*/}*.js',
    },
    concat: {
      build: {
        src: ['<%= files.src %>'],
        dest: '<%= pkg.main %>'
      }
    },
    uglify: {
      build: {
        src: '<%= pkg.main %>',
        dest: '<%= pkg.minified %>'
      }
    },
    clean: ['<%= dir.build %>','<%= dir.temp %>'],
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      build: [
        'Gruntfile.js',
        '<%= files.src %>'
      ]
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      single: {
        singleRun: true
      },
      continuous: {
        singleRun: false
      }
    }
  });

  grunt.registerTask('build', ['clean', 'concat', 'uglify']);
};
