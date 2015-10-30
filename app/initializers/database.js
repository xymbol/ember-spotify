import Database from '../services/database';

export function initialize(application) {
  application.register('service:database', Database);
  application.inject('route', 'database', 'service:database');
}

export default {
  name: 'database',
  initialize: initialize
};
