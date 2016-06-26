//jshint strict: false

var webpackConfig = require('./webpack.config.js');

// what we define in the "files" object will serve as the entry point
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    files: [
      './app/app.module.js',      
      './node_modules/angular-mocks/angular-mocks.js',
      './app/**/*.spec.js'      
    ],

    preprocessors: {
      './app/app.module.js': ["webpack"],      
      './app/**/*.spec.js': ["babel"]    
    },
  
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',      
      'karma-jasmine',
      'karma-webpack',
      'karma-babel-preprocessor'
    ]

  });
};
