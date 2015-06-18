import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  url: DS.attr('string'),
  pic1: DS.attr(),
  pic2: DS.attr(),
  pic3: DS.attr(),
  pic4: DS.attr()

});
