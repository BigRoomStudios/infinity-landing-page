'use strict';

module.exports = function(server) {

  return [
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: '/public'
          }
        }
    },
    {
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
        return reply.view('index');
      }
    },
    {
      method: 'GET',
      path:'/ignition',
      handler: function (request, reply) {
        return reply.view('ignition');
      }
    },
    {
      method: 'GET',
      path:'/flight-plan',
      handler: function (request, reply) {
        return reply.view('flight-plan');
      }
    },
    {
      method: 'GET',
      path:'/launch',
      handler: function (request, reply) {
        return reply.view('launch');
      }
    },
    {
      method: 'GET',
      path:'/contact',
      handler: function (request, reply) {
        return reply.view('contact');
      }
    }
  ];

};
