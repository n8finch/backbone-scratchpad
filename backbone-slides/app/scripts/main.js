require.config({



});

require(['views/app'], function(AppView) {

  window.App = {
    Vent: _.extend({}, Backbone.Events)
  };

  new AppView();

});