import Ember from 'ember';

export function underscoredStringToTitleCase(params) {
  return params[0].split("_").map((word) => word.capitalize()).join(" ");
}

export default Ember.Helper.helper(underscoredStringToTitleCase);
