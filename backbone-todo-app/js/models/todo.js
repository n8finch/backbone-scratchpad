(function ($) {
  'use strict';

  var app = app || {};

  // TodoModel
  // ----------
  // Our basic **Todo model has `title` and `completed` attributes.
  
  app.Todo = Backbone.Model.extend({
    
    //Default attributes ensure that each todo created has 'title and 'completed'

    defaults: {
      'title': '',
      'completed': false
    },

    //Toggle the 'completed state of the this todo item.

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
    
  });

})(jQuery);