import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      playlists: this.database.findAll('featured-playlist'),
      genres: this.database.findAll('genre')
    });
  },

  actions: {
    goToNext() {
      var owl = Ember.$('.owl-carousel');
      owl.trigger('next.owl.carousel');
    },
    goToPrevious() {
      var owl = Ember.$('.owl-carousel');
      owl.trigger('prev.owl.carousel', [300]);
    }
  }
});
