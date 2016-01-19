import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('operator-form/include-operator-select', 'Integration | Component | operator form/include operator select', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{operator-form/include-operator-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#operator-form/include-operator-select}}
      template block text
    {{/operator-form/include-operator-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
