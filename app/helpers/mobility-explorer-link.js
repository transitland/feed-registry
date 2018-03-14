import Ember from 'ember';

export function mobilityExplorerLink(params, hash) {
  let link = 'https://mobility-explorer.netlify.com/#/'
  if (hash.query == 'operator') {
    link = link + 'operators?bbox=' + hash.operator.get('geometryToBboxString') + '&onestop_id=' + hash.operator.get('onestop_id');
  } else if (hash.query == 'routesByOperator') {
    link = link + 'routes?bbox=' + hash.operator.get('geometryToBboxString') + '&operated_by=' + hash.operator.get('onestop_id');
  } else if (hash.query == 'stopsByOperator') {
    link = link + 'stops?bbox=' + hash.operator.get('geometryToBboxString') + '&served_by=' + hash.operator.get('onestop_id');
  }
  return new Ember.Handlebars.SafeString(`<a href="${link}">${hash.text}</a>`);
}

export default Ember.Helper.helper(mobilityExplorerLink);
