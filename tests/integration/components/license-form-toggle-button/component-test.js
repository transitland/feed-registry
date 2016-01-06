import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('license-form-toggle-button', 'Integration | Component | license form toggle button', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{license-form-toggle-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#license-form-toggle-button}}
      template block text
    {{/license-form-toggle-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
