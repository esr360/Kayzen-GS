//=================================================================
// Kayzen GS - Grunt Setup
//=================================================================

module.exports = function(grunt) {

    //-------------------------------------------------------------
    // Config
    //-------------------------------------------------------------

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

    //-------------------------------------------------------------
    // Tasks
    //-------------------------------------------------------------
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
      
        //---------------------------------------------------------
        // Concat
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------

        concat: {   
            app: {
                src: _core,
                dest: 'dist/kayzen-gs.scss',
            }
        },
      
        //---------------------------------------------------------
        // Sass
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
        
        sass: {
            options: {
                "sourcemap=none": ''
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/kayzen-gs.css': 'src/kayzen-gs.scss'
                },
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/kayzen-gs.min.css': 'src/kayzen-gs.scss'
                },
            } 
        },
        
        //---------------------------------------------------------
        // PostCSS
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
      
        postcss: {
            options: {
                map: true,
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
  
        //---------------------------------------------------------
        // Scss Lint
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
        
        scsslint: {
            allFiles: [
                'src/kayzen-gs.scss',
            ],
            options: {
                colorizeOutput: true
            },
        },
      
        //---------------------------------------------------------
        // Watch
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
  
        watch: {
            css: {
                files: [
                    'src/**/*.scss'
                ],
                tasks: ['sass', 'notify:css'],
                options: {
                    spawn: false,
                }
            }
        },
      
        //---------------------------------------------------------
        // Notify
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
        
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

    //-------------------------------------------------------------
    // Load Npm Tasks
    //-------------------------------------------------------------
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-notify');
    
    //-------------------------------------------------------------
    // Register Tasks
    //-------------------------------------------------------------

    grunt.registerTask('default', [
        'watch'
    ]);

}; // function(grunt)