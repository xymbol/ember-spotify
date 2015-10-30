import Ember from 'ember';

export default Ember.Route.extend({
  database: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      playlists: this.get('database').findAll('featured-playlist'),
      genres: this.get('database').findAll('genre')
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
