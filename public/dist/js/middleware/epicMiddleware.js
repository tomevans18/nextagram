'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxObservable = require('redux-observable');

var _epics = require('../epics');

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const dependencies = {
//   callStaticAPI,
//   callEventSource,
// }

// export default createEpicMiddleware(rootEpic, { dependencies })
exports.default = (0, _reduxObservable.createEpicMiddleware)(_epics2.default);
// import { callStaticAPI, callEventSource } from '../lib/services'