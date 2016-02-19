import Ember from 'ember';
import PaginatedControllerMixin from '../../../mixins/paginated-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | paginated controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let PaginatedControllerObject = Ember.Object.extend(PaginatedControllerMixin);
  let subject = PaginatedControllerObject.create();
  assert.ok(subject);
});
