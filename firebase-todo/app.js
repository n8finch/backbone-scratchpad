// This is a plain old Backbone Model
var Todo = Backbone.Model.extend({
  defaults: {
    completed: false,
    title: 'New todo'
  }
});

// This is a Firebase Collection that syncs data from this url
var Todos = Backbone.Firebase.Collection.extend({
  url: 'https://testtodoapp-41201.firebaseio.com/todos',
  model: Todo
});



