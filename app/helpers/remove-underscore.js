import Ember from 'ember';

export function removeUnderscore(params/*, hash*/) {
  let input = params[0];
  return input.replace('_', ' ');
}

export default Ember.Helper.helper(removeUnderscore);
