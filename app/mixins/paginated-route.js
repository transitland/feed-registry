import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: {
    offset: {
      refreshModel: true
    }
  }
});