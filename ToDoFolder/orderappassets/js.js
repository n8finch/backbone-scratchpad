$(function() {

    var Service = Backbone.Model.extend({

        defaults: {
            title: 'My service',
            price: 100,
            checked: false
        },

        toggle: function() {
            this.set('checked', !this.get('checked'));
        }

    });

    var ServiceList = Backbone.Collection.extend({

        model: Service,

        getChecked: function() {
            return this.where({ checked: true });
        }
    });


    var services = new ServiceList([

        new Service({ title: 'web development', price: 200 }),
        new Service({ title: 'web design', price: 250 }),
        new Service({ title: 'photography', price: 100 }),
        new Service({ title: 'coffee date', price: 10 }),

    ]);


    var ServiceView = Backbone.View.extend({

        tagName: 'li',

        events: {
            'click': 'toggleService'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render)
        },

        render: function() {

            this.$el.html(
                '<input type="checkbox" value="1" name"' +
                this.model.get('title') + '"/>' +
                this.model.get('title') + '<span>$' + this.model.get('price') + '</span>'
            );
            this.$('input').prop('checked', this.model.get('checked'));

        },

        toggleService: function() {
            this.model.toggle();
        }

    });



    var App = Backbone.View.extend({

        // Base the view on an existing element
        el: $('#main'),

        initialize: function() {

            // Cache these selectors
            this.total = $('#total span');
            this.list = $('#services');

            // Listen for the change event on the collection.
            // This is equivalent to listening on every one of the
            // service objects in the collection.
            this.listenTo(services, 'change', this.render);

            // Create views for every one of the services in the
            // collection and add them to the page

            services.each(function(service) {

                var view = new ServiceView({ model: service });
                this.list.append(view.render().el);

            }, this); // "this" is the context in the callback
        },

        render: function() {

            // Calculate the total order amount by agregating
            // the prices of only the checked elements

            var total = 0;

            _.each(services.getChecked(), function(elem) {
                total += elem.get('price');
            });

            // Update the total price
            this.total.text('$' + total);

            return this;
        }
    });

    new App();




});
