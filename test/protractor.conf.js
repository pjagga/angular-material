exports.config = {
  chromeDriver:'./node_modules/protractor/selenium/chromedriver',
  directConnect: true,

  baseUrl: 'http://192.168.99.100:8080',
  allScriptsTimeout: 15000,

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../test/e2e/features/steps/test.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions:{
      prefs:{'profile.managed_default_content_settings.popups':1}
    }
  },
  cucumberOpts: {
    require: '../test/e2e/features/step_defs/*.js',
    format: 'pretty'
  }
};




