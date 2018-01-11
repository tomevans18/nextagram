'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actions/actionTypes');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'null';
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.PING:
      return 'ping';
    case _actionTypes.PONG:
      return 'pong';
    case _actionTypes.NULL:
      return 'null';
    default:
      return state;
  }
};