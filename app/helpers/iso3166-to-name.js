import Ember from 'ember';
import iso31662 from 'npm:iso-3166-2';

export function iso3166toName(params) {
  let input = params[0];
  let output = iso31662.subdivision(input).name;
  if (Ember.isBlank(output)) {
    output = iso31662.country(input).name;
  }
  if (Ember.isBlank(output)) {
    output = input;
  }
  return output;

}

export default Ember.Helper.helper(iso3166toName);
