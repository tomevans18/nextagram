'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actions/actionTypes');

var _ping = require('../actions/ping');

var pingEpic = function pingEpic(action$) {
  return action$.filter(function (action) {
    return [_actionTypes.PING, _actionTypes.PONG].includes(action.type);
  }).delay(1000).mapTo((0, _ping.nullAction)());
};

exports.default = pingEpic;