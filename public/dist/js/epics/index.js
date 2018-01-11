'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('rxjs');

var _reduxObservable = require('redux-observable');

var _pingEpic = require('./pingEpic');

var _pingEpic2 = _interopRequireDefault(_pingEpic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxObservable.combineEpics)(_pingEpic2.default);