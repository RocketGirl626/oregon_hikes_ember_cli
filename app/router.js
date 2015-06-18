import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('hikes', {path: '/'});
  this.resource('hikes', function() {
    this.route('new');
  });

  this.resource('images', function() {
    this.route('new');
  });
});

export default Router;
