module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

       imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/images/build/'
        }]
    }
}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin']);

};