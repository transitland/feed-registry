import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  affiliation: DS.attr('string'),
  user_type: DS.attr('string'),
  changesets: DS.hasMany('changeset')
});
