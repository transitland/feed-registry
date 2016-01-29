import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sumbit-form-toggle-button', 'Integration | Component | sumbit form toggle button', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{sumbit-form-toggle-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#sumbit-form-toggle-button}}
      template block text
    {{/sumbit-form-toggle-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
