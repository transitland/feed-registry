import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('operator', { });
  },
  actions: {
    submit: function() {
      var operator = this.currentModel;
      // TODO: actually compute real Onestop ID from short name and geometry
      operator.set('id', 'o-9q9-FAKE');
      var changeset = operator.toChangeset();
      changeset.save();
    },
    emailSignup: function(){
      console.log("sucessful email signup");
    },
    addOperatorForm: function() {
      return("{{operator-form operator=model}}");
    }
  }
});
