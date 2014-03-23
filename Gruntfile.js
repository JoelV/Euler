module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['*.js', 'lib/*.js'],
    mochaTest: {
      test: {
        options: {
          reporter: 'nyan'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {
      app: {
        files: ['*.js', 'lib/*.js'],
        tasks: ['jshint', 'mochaTest']
      },
      mocha: {
        files: ['test/*Spec.js'],
        tasks: ['mochaTest']
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['watch']);

};
