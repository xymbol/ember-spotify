import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      playlists: this.database.findAll('featured-playlist'),
      genres: this.database.findAll('genre')
    });
  },
  actions:{
    goToNext: function() {
      var owl = $('.owl-carousel');
      owl.trigger('next.owl.carousel');
    },

    goToPrevious: function() {
      var owl = $('.owl-carousel');
      owl.trigger('prev.owl.carousel', [300]);
    }
  }
});
