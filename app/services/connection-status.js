import Ember from 'ember';

export default Ember.Service.extend({
  setup (owner) {
    ;['online', 'offline'].forEach(status => {
      window.addEventListener(status, event => {
        try {
          owner.send(status, event)
        } catch (e) {}
      }, false)
    })
  }
});
