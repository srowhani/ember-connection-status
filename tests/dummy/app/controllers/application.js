import Ember from 'ember';

export default Ember.Controller.extend({
  connectionStatus: Ember.inject.service(),
  actions: {
    online (event) {
      this.notifications.success(event.type, {
        autoClear: true,
        clearDuration: 1000
      });
    },
    offline (event) {
      this.notifications.error(event.type, {
        autoClear: true,
        clearDuration: 1000
      });
    }
  }
});
