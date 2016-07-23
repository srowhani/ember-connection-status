import Ember from 'ember';
import ConnectionStatusInitializer from 'dummy/initializers/connection-status';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | connection status', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ConnectionStatusInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
