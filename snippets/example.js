import Ember from 'ember';

let notify = function (type, msg) {
  this.notifications[type](msg, {
    autoClear: true,
    clearDuration: 1000
  });
}
export default Ember.Controller.extend({
  connectionStatus: Ember.inject.service(),
  init () {
    this._super(...arguments)
    let connection = this.get('connectionStatus')
    connection.setup(this)
  },
  status: Ember.computed('connectionStatus.online', function () {
    return this.get('connectionStatus.online')
      ? 'online' : 'offline'
  }),
  actions: {
    online (event) {
      notify.call(this, 'success', event.type)
    },
    offline (event) {
      notify.call(this, 'error', event.type)
    }
  }
})
