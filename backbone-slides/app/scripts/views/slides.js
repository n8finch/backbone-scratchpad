define(['backbone', 'views/slide'], function(Backbone, SlideView) {

  var SlidesView = Backbone.View.extend({

    el: $('.slides'),

    initialize: function() {
      this.currentSlideIndex = 1;
      this.transitionSpeed = 400;
      this.renderAll();

      App.Vent.on('init', this.hideAllButFirst, this);
      App.Vent.on('changeSlide', this.changeSlide, this);
    },

    hideAllButFirst: function () {
      this.$el.children(':nth-child(n+2)').hide();
    },

    changeSlide: function(opts) {

      var newSlide;
      var slides = this.$el.children();
      // If we're requestion a special slide
      // then set current index

      if (opts.slideIndex ) {
        this.currentSlideIndex = ~~opts.slideIndex;
      } else {
        //otherwise grab next or prev slide.
        this.nextSlide(opts.direction);
      }

      newSlide = slides.eq(this.currentSlideIndex - 1);

      //transition to that slide
      slides.filter(':visible')
        .css('position', 'relative')
        .animate({
          top: 100%,
          opacity: 'hide'
        }, this.transitionSpeed, function() {
          //slide is gone from view
          
        });

    },

    nextSlide: function(direction) {
      //TODO
    },

    renderAll: function() {
      this.$el.empty();
      this.collection.each(this.render, this);
    },

    render: function() {
      var slideView = new SlideView({ model: slide });
      this.$el.append(slideView.render().el);

      return this;
    }


  });

  return SlidesView;

});