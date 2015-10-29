import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browser', {});
  this.route('search', {});
  this.route('radio', {});
  this.route('collection', {});
  this.route('follow', {});
});

export default Router;
