# Backbone Book Library App

This is a sample app from the [Backbone Applications book](https://addyosmani.com/backbone-fundamentals/#exercise-2-book-library---your-first-restful-backbone.js-app)

This work is not mine originally. I might add some bells and whistles, but it is just for the purpose of learning Backbone. I've copied here for my reference. 

Original tutorial can be found at the above link.

For the RESTAPI on this project, the endpoints should look like:

url             HTTP Method  Operation
/api/books      GET          Get an array of all books
/api/books/:id  GET          Get the book with id of :id
/api/books      POST         Add a new book and return the book with an id attribute added
/api/books/:id  PUT          Update the book with id of :id
/api/books/:id  DELETE       Delete the book with id of :id