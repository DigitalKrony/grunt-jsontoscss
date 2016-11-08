/*
 * jsonToSass
 * http://funedikly.com
 *
 * Copyright (c) 2016 Adam Sivins
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    pkg: grunt.file.readJSON('package.json'),

    // Project Config.
    grunt.initConfig({
        assemble: {
            example: {
                files: {
                    './dest': ['./src/example/*.hbs']
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            dest: ['dest'],
            temp: ['./src/temp']
        },

        copy: {
            example: {
                files: [{
                    expand: true,
                    flatten: true,
                    filter: 'isFile',
                    src: ['./src/example/*.scss'],
                    dest: './src/temp'
                }, {
                    src: ['./src/temp/_variable_map.scss'],
                    dest: './dest/example/_variable_map.scss'
                }],
            }
        },

        // Configuration to be run (and then tested).
        jsonToSass: {
            dev: {
                files: {
                    'dest/dev/dev_test.scss': ['./src/test/*.json']
                }
            },
            example: {
                files: {
                    './src/temp/_variable_map.scss': ['./src/example/*.json']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        },

        sass: {
            example: {
                options: {
                    style: 'expanded',
                    compass: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: "./src/temp/",
                    src: "./*.scss",
                    dest: "./dest/example/",
                    ext: ".css"
                }]
            }
        }

    });

    // Load plugin task.
    grunt.loadTasks('tasks');

    // Dev plugins (not required for use).
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');

    // List of Dev Tasks. Clean, Build, Test.
    grunt.registerTask('default', ['clean:dest', 'jsonToSass:dev']);

    grunt.registerTask('build', ['clean:dest', 'jsonToSass:example', 'copy:example', 'sass:example', 'clean:temp', 'assemble:example'])

};
