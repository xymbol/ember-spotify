import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['owl-carousel'],

  didInsertElement() {
    this.$().owlCarousel({
      responsive: {
        0: {
          items: this.get('itemsMobile')
        },
        600: {
          items: this.get('itemsTablet')
        },
        1000: {
          items: this.get('itemsDesktop')
        }
      }
    });
  }
});
