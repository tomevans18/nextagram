'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _epicMiddleware = require('../middleware/epicMiddleware');

var _epicMiddleware2 = _interopRequireDefault(_epicMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_epicMiddleware2.default];

if (process.env.NODE_ENV !== 'production') {
  // storeEnhancer.push(DevTools.instrument())
  middlewares.push((0, _reduxLogger.createLogger)());
}

console.log(process.env.NODE_ENV, 'env');

var storeEnhancer = [_redux.applyMiddleware.apply(undefined, middlewares)];
var finalCreateStore = _redux.compose.apply(undefined, storeEnhancer)(_redux.createStore);
var configureStore = function configureStore(initialState) {
  return finalCreateStore(_reducers2.default, initialState);
};
exports.default = configureStore;