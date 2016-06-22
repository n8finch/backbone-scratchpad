// Get started: http://backbonejs.org/#Getting-started


//Create a Model Class
var TodoItem = Backbone.Model.extend({});
//Create a Model Instance
var todoItem = newTodoItem(

    {
        description: 'Pick up milk',
        status: 'incomplete',
        id: 1
        urlRoot: '/todos'
    }

    // or can create defaults like this:

    defaults: {
        description: 'Empty todo...',
        status: 'incomplete'
    }

);


// todoItem.get('description'); --> gets data out of the model

// todoItem.set({status: 'complete'}) --> to set an attribute

// todoItem.save(); --> sync to server, a PUT request

// todoItem.destroy(); --> delete from server

// todoItem.toJSON(); --> get JSON from model


// Create a View Class
var TodoView = Backbone.View.extend({
    // Define the rendering view

    ...
    //use Backone uses Underscore.js as a dependancy, so we can use it for templating
    template: _.template('<h3><%= description %></h3>'),

    render: function() {
        var html = '<h3>' + this.model.get('description') + '</h3>';
        $(this.el).html(html); //sets the html of this view element. Note: every view instance has a top leve element, hence the "el".

        //OR

        render: function() {
            var attributes = this.model.toJSON();
            this.$el.html(this.template(attributes));
        }
    }

    // in Backbone, Views are responsible to responding to user interaction, so...

        events: {
            "click h3": "alertStatus" // will alert on any h3 click.
        }
        //then this function is defined in the view
    alertStatus: function(e) {
        alert('click');
    }

    //define multiple events:

        events: {
        'dbclick': 'open',
        'click .icon.doc': 'select'
            //etc...
    }

});
// Create a View Instance
var todoView = new TodoView({ model: todoItem });
//then you can call the render function and console log it out:
todoView.render();
console.log(todoView.el);






//Fetching Data from the Server
//URL to get JSON data for model
todoItem.url = '/todo';
//To populate model from server
todoItem.fetch();
todoItem.get('description');




// Models can have Events

//To listen for an event on a model
todoItem.on('event-name', function() {
    alert('event-name happened!');
});
//To run/trigger the event:
todoItem.trigger('event-name');
//Special events
//to listen for changes:
todoItem.on('change', doThing); // --calls doThing function
//removed event listener
todoItem.off('change', doThing);
// see all events: http://backbonejs.org/#Events-catalog



// Views and View Elements
//all of these are the same, so check the progression
$('#todo-view').html();
$(todoView.el).html();
todoView.$el.html(); // this one is actually more dynamic



// Updating the Model on View Events

var TodoView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); // --> renders on any change

	}

	events: {
		'change input': 'toggleStatus'
	},

	toggleStatus: function() {
		if(this.model.get('status') === 'incomplete') {
			this.model.set({'status': 'complete'});
		} else{
			this.model.set({'status': 'incomplete'});
		}
	} //although, actually, this should stay out of the View and be put in the Model so that the Model logic stays in the Model and out of the View.

});



// Collections

var TodoList = Backbone.Collection.extend({
	model: TodoItem
});

var todoList = new TodoList():
