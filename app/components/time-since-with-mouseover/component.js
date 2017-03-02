import Ember from 'ember';

const TimeSinceWithMouseoverComponent = Ember.Component.extend({
  tagName: 'abbr',
  dateAsString: Ember.computed('date', function() {
    let date = this.get('date');
    if (Ember.isPresent(date)) {
      return this.get('date').toString();
    }
  }),
  attributeBindings: ['title'],
  title: Ember.computed.alias('dateAsString')
});

TimeSinceWithMouseoverComponent.reopenClass({
  positionalParams: 'date'
});

export default TimeSinceWithMouseoverComponent;
