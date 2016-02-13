module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'assets/css/styles.css'
      },
    },

    copy: {
      // eot: {
      //   src: '../icons/icons.eot',
      //   dest: 'assets/css/',
      //   expand: true,
      //   flatten: true,
      // },
      html: {
        src: 'components/icons/icons.html',
        dest: 'assets/css/',
        expand: true,
        flatten: true,
      },
    },

    sass: {
      app: {
        files: [{
          src: 'assets/scss/styles.scss',
          dest: 'assets/css/styles.css'
        }]
      },
      options: {
        sourceMap: true
      }
    },

    watch: {
      sass: {
        files: ['../{,*/}*.{scss,sass}'],
        tasks: ['sass','autoprefixer','cssmin',]
      },
      options: {
        // livereload: true,
        spawn: false
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/styles.min.css': 'assets/css/styles.css',
        }
      }
    },

    exec: {
      // add new files before commiting
      add: {
        command: 'git add .'
      },

      // push to gh-pages branch
      pages: {
        command: [
          'git checkout gh-pages',
          'git pull origin master',
          'git push origin gh-pages',
          'git checkout master'
        ].join('&&')
      },

      // adds prompted commit message
      message: {
        command: function() {
          var message = grunt.config('gitmessage');
          return "git commit -am '" + message + "'";
        }
      }
    },

    prompt: {
      commit: {
        options: {
          questions: [
            {
              config: 'gitmessage',
              type: 'input',
              message: 'Commit Message'
            }
          ]
        }
      }
    },

    connect: {
      main: {
        options: {
          port: 8001
        }
      }
    },
  });

  grunt.registerTask('default', [
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'connect',
    'watch'
  ]);

  grunt.registerTask('release', [
    'exec:add',
    'prompt',
    'exec:message',
    'exec:pages'
  ]);
};
