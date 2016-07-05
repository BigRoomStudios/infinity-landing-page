'use strict';

const Hapi = require('hapi');
const Path = require('path');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '../../public')
        }
    }
});

// Setup the views engine and folder
server.register(require('./plugins')(server), (err) => {

  if (err) {
      throw err;
  }

  server.views({
      engines: {
          html: require('swig')
      },
      path: './app/views'
  });


  // Add the routes
  server.route(require('../config/routes')(server));

  // Start the server
  server.start((err) => {

      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });

});
