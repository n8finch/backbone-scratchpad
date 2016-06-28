// Module dependencies.
var application_root = __dirname,
  express = require( 'express' ), //Web framework
  bodyParser = require('body-parser'), //Parser for reading request body
  path = require( 'path' ), //Utilities for dealing with file paths
  mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
var app = express();

//Where to serve static content
app.use( express.static( path.join( application_root,'/', 'site') ) );
app.use(bodyParser());

//Start server
var port = 4711;

app.listen( port, function() {
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

// Routes

app.get( '/', function( request, response ) {
  response.send( 'App API is running' );
});

app.get( '/api', function( request, response ) {
  response.send( 'Library API is running' );
});