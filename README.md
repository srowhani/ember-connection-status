# Ember-connection-status

[Demo](http://srowhani.github.io/ember-connection-status)

Convenience tool I threw together from this [gist](https://gist.github.com/lukes/e190d5db75204bc1ca64)

## Instructions

- `ember install ember-connection-status`
- In either a controller, route, or component add the following:

Here's the application route as an example.
```js
import Ember from 'ember';

export default Ember.Route.extend({
  connectionStatus: Ember.inject.service(),
  init () {
    this._super(...arguments)
    let connection = this.get('connectionStatus')
    //pass this instance to connectionStatus service.
    //allows for action hooks to fire here.
    connection.setup(this)
  },
  status: Ember.computed('connectionStatus.online', function () {
    return this.get('connectionStatus.online')
      ? 'Online' : 'Offline'
  }),
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
```

You can also access the network status via the `connection.online` property.
If you choose you can observe changes, or create a computed property based on it.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Try it yourself

Clone the repo, go through the installation process, and serve it up.

* `ember server`
* Visit your app at http://localhost:4200.
