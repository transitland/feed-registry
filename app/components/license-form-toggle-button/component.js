import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  isSelected: Ember.computed('attr', function() {
    if (this.get('attr') === this.get('value')) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    click() {
      this.set('attr', this.get('value'));
    }
  }
});
