exports.config ={
 specs:['e2e/**/*.js'],
 framework:'mocha',
 mochaOpts: {
  reporter: 'spec',
  slow: 3000,
  enableTimeouts: false
 },
  capabilities: {
    'browserName': 'chrome',
  }
}
