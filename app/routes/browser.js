import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      playlists: this.store.query('playlist', {
        featured: true
      }),
      genres: this.store.findAll('genre')
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
