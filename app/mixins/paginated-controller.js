import Ember from 'ember';

export default Ember.Mixin.create({
  perPage: 5,
  queryParams: ["offset"],
  offset: 0,
  hasPreviousPage: Ember.computed("offset", function() {
    return this.get("offset") > 0;
  }),
  hasNextPage: Ember.computed("model", function() {
    if (this.model.meta && "next" in this.model.meta) {
      return Ember.isPresent(this.model.meta.next);
    } else {
      return false;
    }
  }),
  previousOffset: Ember.computed("offset", function() {
    return this.get("offset") - this.get("perPage");
  }),
  nextOffset: Ember.computed("offset", function() {
    return this.get("offset") + this.get("perPage");
  })
});