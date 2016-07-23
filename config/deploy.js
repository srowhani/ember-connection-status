/* jshint node: true */

module.exports = function (deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  }
  ENV['gh-pages'] = {
    force: process.env.GIT_FORCE_PUSH,
    slack: {
      webhookURL: process.env.WEBHOOK_URL,
      options: {
        channel: process.env.SLACK_CHANNEL
      }
    }
  }
  ENV.build.environment = 'pages'
  return ENV
}
