import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.attr('string'),
  applied: DS.attr('boolean'),
  applied_at: DS.attr('date'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  payload: DS.attr()
});
