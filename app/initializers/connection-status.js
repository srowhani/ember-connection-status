export default {
  name: 'connection-status',
  initialize: function (app) {
    ;['route', 'controller'].forEach(type => {
      app.inject(type, 'connectionStatus', 'service:connection-status')
    })
  }
};
