import Ember from 'ember';
import GooglePageviewMixin from '../../../mixins/google-pageview';
import { module, test } from 'qunit';

module('Unit | Mixin | google pageview');

// Replace this with your real tests.
test('it works', function(assert) {
  var GooglePageviewObject = Ember.Object.extend(GooglePageviewMixin);
  var subject = GooglePageviewObject.create();
  assert.ok(subject);
});
