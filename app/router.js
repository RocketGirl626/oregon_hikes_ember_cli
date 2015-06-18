import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hike');
  this.route('hikes');
  this.resource('images', function() {
    this.route('new');
  });
});

export default Router;
