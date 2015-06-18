import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addImage: function() {
      var newImage =  this.store.createRecord('image', {
        name: this.get('name'),
        body: this.get('body')
      });
      newImage.save();
      this.setProperties({
        name: '',
        body: ''
      });
    }
  }
});
