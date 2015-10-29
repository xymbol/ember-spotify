import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.attr('string'),
  artist: DS.attr('string'),
  album: DS.attr('string'),
  duration: DS.attr('string')
});
