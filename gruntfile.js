module.exports = function(grunt) {
  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ["./src"],
          yuicompress: true
        },
      files: {
        "./src/css/wsr.css": "./src/Less/wsr.less"
      }
    }
  },
  // running `grunt watch` will watch for changes
  watch: {
    files: "./src/Less/*.less",
    tasks: ["less"]
  }
});
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};