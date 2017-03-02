import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-since-with-mouseover', 'Integration | Component | time since with mouseover', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{time-since-with-mouseover}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#time-since-with-mouseover}}
      template block text
    {{/time-since-with-mouseover}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
