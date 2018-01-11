'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nullAction = exports.pongAction = exports.pingAction = undefined;

var _actionTypes = require('./actionTypes');

var pingAction = exports.pingAction = function pingAction() {
  return {
    type: _actionTypes.PING
  };
};

var pongAction = exports.pongAction = function pongAction() {
  return {
    type: _actionTypes.PONG
  };
};

var nullAction = exports.nullAction = function nullAction() {
  return {
    type: _actionTypes.NULL
  };
};