define(['backbone', 'views/slides', 'collection/slides', 'router'], function(Backbone, SlidesCollection, SlidesView, MainRouter) {

  var AppView = Backbone.View.extend({

    el: 'body',

    initialize: function() {

      new SlidesView({
        collection: newSlidesCollection([])
      });

      App.router = new MainRouter;
      Backbone.history.start();
    }

  });

  return AppView;

});