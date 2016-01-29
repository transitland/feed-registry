import ApplicationSerializer from '../application/serializer';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: {
      serialize: 'records'
    }
  }
});
