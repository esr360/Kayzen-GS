/**
 * Kayzen-GS Grunt Setup
 */

module.exports = function(grunt) {
      
    /**
     * Configuration
     */

    // App Scripts
    var _core = [
        'src/lib/functions/*',
        'src/_config.scss',
        'src/lib/tools/*',
        'src/lib/column-types/**/*',
        'src/core/column/*',
        'src/core/row/*',
        'src/core/*',
        'src/lib/semantic-gs/*'
    ];
      
    /**
     * Tasks
     */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
 
        /**
         * Concat
         * @see https://github.com/SassDoc/grunt-sassdoc
         */

        concat: {   
            app: {
                src: _core,
                dest: 'dist/kayzen-gs.scss',
            }
        },
      
        /**
         * Sass
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        
        sass: {
            options: {
                sourcemap: 'none',
            },
            dev: {
                files: {
                    'dist/kayzen-gs.css': 'src/kayzen-gs.scss'
                },
                options: {
                    style: 'expanded'
                }
            },
            prod: {
                files: {
                    'dist/kayzen-gs.min.css': 'src/kayzen-gs.scss'
                },
                options: {
                    style: 'compressed'
                }
            },
            test: {
                files: {
                    'unit-testing/tests.css': 'unit-testing/tests.scss'
                },
                options: {
                    style: 'expanded'
                }
            } 
        },
      
        /**
         * PostCSS
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
      
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions', 
                            'ie >= 9'
                        ]
                    })
                ]
            },
            build: {
                src: 'dist/*.css'
            }
        },
      
        /**
         * ScssLint
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        
        scsslint: {
            allFiles: [
                'src/kayzen-gs.scss',
            ],
            options: {
                colorizeOutput: true
            },
        },
      
        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */

        sassdoc: {
            default: {
                src: 'src',
                options: {
                    dest: 'docs'
                }
            },
        },
      
        /**
         * Mocha
         * @see https://github.com/SassDoc/grunt-sassdoc
         */

        mochacli: {
            options: {
                require: ['sass-true'],
                reporter: 'sass-true',
                bail: false
            },
            all: ['unit-testing/tests.js']
        },
      
        /**
         * Watch
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
  
        watch: {
            css: {
                files: [
                    'src/**/*.scss'
                ],
                tasks: [
                    'sass', 
                    'sassdoc',
                    'notify:css'
                ],
                options: {
                    spawn: false,
                }
            }
        },
      
        /**
         * Notify
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        
        notify: {
            css: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
                }
            },
            app: {
                options: {
                    title: 'App Built',
                    message: 'Your app has been successfully built!'
                }
            }
        }

    });
      
    /**
     * Load NPM tasks
     */
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-notify');
      
    /**
     * Register Tasks
     */

    grunt.registerTask('default', [
        'compile',
        'watch'
    ]);

    grunt.registerTask('compile', [
        'concat',
        'sass',
        'postcss',
        //'scsslint',
        'sassdoc',
        'notify:app'
    ]);

};