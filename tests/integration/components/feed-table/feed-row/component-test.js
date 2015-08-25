import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('feed-table/feed-row', 'Integration | Component | feed table/feed row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed-table/feed-row}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#feed-table/feed-row}}
      template block text
    {{/feed-table/feed-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
