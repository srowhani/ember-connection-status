import Ember from 'ember';

export default Ember.Service.extend({
  init () {
    this._super(...arguments)

    ;['online', 'offline'].forEach(status => {
      window.addEventListener(status, event => {
        let ctrl = this.container.lookup('controller:application')
        try {
          ctrl.send(status, event)
        } catch (e) {}
      }, false)
    })
  }
});
