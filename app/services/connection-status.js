import Ember from 'ember';

export default Ember.Service.extend({
  online: true,
  setup (owner) {
    ;['online', 'offline'].forEach(status => {
      window.addEventListener(status, event => {
        this.set('online', status === 'online')
        try {
          owner.send(status, event);
        } catch (e) {}
      }, false);
    });
  }
});
