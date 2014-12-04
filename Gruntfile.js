module.exports = function (grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bower: {
			install: {
				options: {
					targetDir: 'js/vendor',
					layout: 'byComponent'
				}
			}
		},

		clean: {
			build: ['build'],
			dev: {
				src: ['build/app.js', 'build/<%= pkg.name %>.css', 'build/<%= pkg.name %>.js']
			},
			prod: ['dist']
		},

		less: {
			transpile: {
				files: {
					'css/<%= pkg.name %>.css': [
						'css/normalize.css',
						'less/main.less'
					]
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'css/<%= pkg.name %>.css': 'css/<%= pkg.name %>.css'
				}
			}
		},

		concat: {
			'build/<%= pkg.name %>.js': ['build/vendor.js', 'build/app.js']
		},

		copy: {

		},

		// CSS minification.
		cssmin: {
			minify: {
				src: ['build/<%= pkg.name %>.css'],
				dest: 'build/<%= pkg.name %>.min.css'
			}
		},

		// Javascript minification.
		uglify: {
			compile: {
				options: {
					compress: true,
					verbose: true
				},
				files: [{
					src: 'build/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				}]
			}
		},

		// for changes to the front-end code
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: []
			},
			less: {
				files: ['less/**/*.less'],
				tasks: ['less:transpile','autoprefixer']
			}
		},

		concurrent: {
			dev: {
				tasks: ['watch:scripts', 'watch:less', 'watch:test'],
				options: {
					logConcurrentOutput: true
				}
			}
		}

	});

	grunt.registerTask('init:dev', ['clean', 'bower']);

	//grunt.registerTask('build:dev', ['clean:dev', 'browserify:app', 'browserify:test', 'jshint:dev', 'less:transpile', 'concat', 'copy:dev']);
	//grunt.registerTask('build:prod', ['clean:prod', 'browserify:vendor', 'browserify:app', 'jshint:all', 'less:transpile', 'concat', 'cssmin', 'uglify', 'copy:prod']);

	//grunt.registerTask('server', ['build:dev', 'concurrent:dev']);


};
