define(['backbone', 'views/slides', 'collection/slides', 'router'], function(Backbone, SlidesCollection, SlidesView, MainRouter) {

  var AppView = Backbone.View.extend({

    el: 'body',

    initialize: function() {

      new SlidesView({
        collection: newSlidesCollection([])
      });

      App.router = new MainRouter;
      Backbone.history.start();
    },

    events: {
      'keyup': 'keyUp'
    },

    keyUp: function(e) {
      //37 is left, 39 is right
      if (e.keycode === 37 || e.keycode === 39) {
        App.Vent.trigger('changeSlide', {
          direction: e.keyCode === 39 ? 'next' : 'prev'
        });
      }
    }

  });

  return AppView;

});