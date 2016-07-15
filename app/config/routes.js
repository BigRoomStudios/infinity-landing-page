'use strict';

module.exports = function(server) {

  return [
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: '.',
              redirectToSlash: true,
              index: true
          }
      }
    },
    {
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
        return reply.view('index', {
          view: 'index'
        });
      }
    },
    {
      method: 'GET',
      path:'/ignition',
      handler: function (request, reply) {
        return reply.view('ignition', {
          view: 'ignition'
        });
      }
    },
    {
      method: 'GET',
      path:'/liftoff',
      handler: function (request, reply) {
        return reply.view('liftoff', {
          view: 'liftoff'
        });
      }
    },
    {
      method: 'GET',
      path:'/flightplan',
      handler: function (request, reply) {
        return reply.view('flightplan', {
          view: 'flightplan'
        });
      }
    },
    {
      method: 'GET',
      path:'/thankyou',
      handler: function (request, reply) {
        return reply.view('thankyou', {
          view: 'thankyou'
        });
      }
    }
  ];

};
