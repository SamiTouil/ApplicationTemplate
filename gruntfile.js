module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            build: {
                src: ['./src/**/*.ts'],
                dest: './dist',
                options: {
                    module: 'system',
                    target: 'es5',
                    rootDir: 'src',
                    experimentalDecorators: true,
                    sourceMap: true,
                    declaration: true,
                    comments: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['./src/**/*.ts', './src/**/*.html'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['./**/*.html'], cwd: "./src", dest: 'dist'}
                ]
            }
        }
    });

    // Load plugins
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['typescript', 'copy']);
};