import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addHike: function() {
      var newHike =  this.store.createRecord('hike', {
        name: this.get('name'),
        body: this.get('body'),
        url: this.get('url')
      });
      newHike.save();
      this.setProperties({
        name: '',
        body: '',
        url: ''
      });
    }
  }
});
