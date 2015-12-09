import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('add-feed-tabs/add-feed-tab', 'Integration | Component | add feed tabs/add feed tab', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-feed-tabs/add-feed-tab}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#add-feed-tabs/add-feed-tab}}
      template block text
    {{/add-feed-tabs/add-feed-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
