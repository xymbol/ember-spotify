import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['owl-carousel'],

  didInsertElement: function(){
    var self = this;

    self.$().owlCarousel({
     responsive:{
        0:{
            items:self.get('itemsMobile'),
        },
        600:{
            items:self.get('itemsTablet'),
        },
        1000:{
            items:self.get('itemsDesktop'),
        }
    }
    });
  }



});
