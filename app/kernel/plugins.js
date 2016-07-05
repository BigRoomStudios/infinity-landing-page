'use strict';

module.exports = function(server) {

  return [
    {
      register: require('vision'),
      options: {}
    }, {
        register: require('inert'),
        options: {}
    }
  ];

};
