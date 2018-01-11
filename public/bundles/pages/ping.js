
          window.__NEXT_REGISTER_PAGE('/ping', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(741);


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PING = exports.PING = 'PING';
var PONG = exports.PONG = 'PONG';
var NULL = exports.NULL = 'NULL';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/actions/actionTypes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/actions/actionTypes.js"); } } })();

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nullAction = exports.pongAction = exports.pingAction = undefined;

var _actionTypes = __webpack_require__(600);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/actions/ping.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/actions/ping.js"); } } })();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(585);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = __webpack_require__(756);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(765);

var _store2 = _interopRequireDefault(_store);

var _ping = __webpack_require__(626);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sutee/Documents/workspace/me/nextgram/pages/ping.js?entry';


var Ping = function (_Component) {
  (0, _inherits3.default)(Ping, _Component);

  function Ping() {
    (0, _classCallCheck3.default)(this, Ping);

    return (0, _possibleConstructorReturn3.default)(this, (Ping.__proto__ || (0, _getPrototypeOf2.default)(Ping)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ping, [{
    key: 'render',

    // static getInitialProps({ store }) {
    //   store.dispatch(pingAction())
    // }

    value: function render() {
      var _props = this.props,
          ping = _props.ping,
          callPong = _props.callPong,
          callPing = _props.callPing;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Status: ', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, ping)), _react2.default.createElement('button', {
        onClick: callPing,
        type: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Ping'), _react2.default.createElement('button', {
        onClick: callPong,
        type: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Pong'));
    }
  }]);

  return Ping;
}(_react.Component);

Ping.propTypes = {
  ping: _propTypes2.default.string.isRequired };

var mapStateToProps = function mapStateToProps(state) {
  return {
    ping: state.ping
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    callPong: (0, _redux.bindActionCreators)(_ping.pongAction, dispatch),
    callPing: (0, _redux.bindActionCreators)(_ping.pingAction, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(Ping);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/pages/ping.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/pages/ping.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/ping")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(787);

var _reduxObservable = __webpack_require__(633);

var _pingEpic = __webpack_require__(761);

var _pingEpic2 = _interopRequireDefault(_pingEpic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxObservable.combineEpics)(_pingEpic2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/epics/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/epics/index.js"); } } })();

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(600);

var _ping = __webpack_require__(626);

var pingEpic = function pingEpic(action$) {
  return action$.filter(function (action) {
    return [_actionTypes.PING, _actionTypes.PONG].includes(action.type);
  }).delay(1000).mapTo((0, _ping.nullAction)());
};

exports.default = pingEpic;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/epics/pingEpic.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/epics/pingEpic.js"); } } })();

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxObservable = __webpack_require__(633);

var _epics = __webpack_require__(760);

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const dependencies = {
//   callStaticAPI,
//   callEventSource,
// }

// export default createEpicMiddleware(rootEpic, { dependencies })
exports.default = (0, _reduxObservable.createEpicMiddleware)(_epics2.default);
// import { callStaticAPI, callEventSource } from '../lib/services'

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/middleware/epicMiddleware.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/middleware/epicMiddleware.js"); } } })();

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(585);

var _ping = __webpack_require__(764);

var _ping2 = _interopRequireDefault(_ping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  ping: _ping2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/reducers/index.js"); } } })();

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(600);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/reducers/ping.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/reducers/ping.js"); } } })();

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(585);

var _reduxLogger = __webpack_require__(776);

var _reducers = __webpack_require__(763);

var _reducers2 = _interopRequireDefault(_reducers);

var _epicMiddleware = __webpack_require__(762);

var _epicMiddleware2 = _interopRequireDefault(_epicMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_epicMiddleware2.default];

if (true) {
  // storeEnhancer.push(DevTools.instrument())
  middlewares.push((0, _reduxLogger.createLogger)());
}

console.log("development", 'env');

var storeEnhancer = [_redux.applyMiddleware.apply(undefined, middlewares)];
var finalCreateStore = _redux.compose.apply(undefined, storeEnhancer)(_redux.createStore);
var configureStore = function configureStore(initialState) {
  return finalCreateStore(_reducers2.default, initialState);
};
exports.default = configureStore;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sutee/Documents/workspace/me/nextgram/js/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sutee/Documents/workspace/me/nextgram/js/store/index.js"); } } })();

/***/ })

},[1078]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9waW5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcz8yMjhhYzQxIiwid2VicGFjazovLy8uL2pzL2FjdGlvbnMvcGluZy5qcz8yMjhhYzQxIiwid2VicGFjazovLy8uL3BhZ2VzL3BpbmcuanM/MjI4YWM0MSIsIndlYnBhY2s6Ly8vLi9qcy9lcGljcy9pbmRleC5qcz8yMjhhYzQxIiwid2VicGFjazovLy8uL2pzL2VwaWNzL3BpbmdFcGljLmpzPzIyOGFjNDEiLCJ3ZWJwYWNrOi8vLy4vanMvbWlkZGxld2FyZS9lcGljTWlkZGxld2FyZS5qcz8yMjhhYzQxIiwid2VicGFjazovLy8uL2pzL3JlZHVjZXJzL2luZGV4LmpzPzIyOGFjNDEiLCJ3ZWJwYWNrOi8vLy4vanMvcmVkdWNlcnMvcGluZy5qcz8yMjhhYzQxIiwid2VicGFjazovLy8uL2pzL3N0b3JlL2luZGV4LmpzPzIyOGFjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFBJTkcgPSAnUElORydcbmV4cG9ydCBjb25zdCBQT05HID0gJ1BPTkcnXG5leHBvcnQgY29uc3QgTlVMTCA9ICdOVUxMJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJpbXBvcnQgeyBQSU5HLCBQT05HLCBOVUxMIH0gZnJvbSAnLi9hY3Rpb25UeXBlcydcblxuZXhwb3J0IGNvbnN0IHBpbmdBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBQSU5HLFxufSlcblxuZXhwb3J0IGNvbnN0IHBvbmdBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBQT05HLFxufSlcblxuZXhwb3J0IGNvbnN0IG51bGxBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBOVUxMLFxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hY3Rpb25zL3BpbmcuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vanMvc3RvcmUnXG5pbXBvcnQgeyBwaW5nQWN0aW9uLCBwb25nQWN0aW9uIH0gZnJvbSAnLi4vanMvYWN0aW9ucy9waW5nJ1xuXG5jbGFzcyBQaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH1cblxuICAvLyBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgc3RvcmUgfSkge1xuICAvLyAgIHN0b3JlLmRpc3BhdGNoKHBpbmdBY3Rpb24oKSlcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBpbmcsIGNhbGxQb25nLCBjYWxsUGluZyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBTdGF0dXM6IDxiPnsgcGluZyB9PC9iPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtjYWxsUGluZ31cbiAgICAgICAgICB0eXBlPSdidXR0b24nPlxuICAgICAgICAgIFBpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtjYWxsUG9uZ31cbiAgICAgICAgICB0eXBlPSdidXR0b24nPlxuICAgICAgICAgIFBvbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGluZzogc3RhdGUucGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGNhbGxQb25nOiBiaW5kQWN0aW9uQ3JlYXRvcnMocG9uZ0FjdGlvbiwgZGlzcGF0Y2gpLFxuICBjYWxsUGluZzogYmluZEFjdGlvbkNyZWF0b3JzKHBpbmdBY3Rpb24sIGRpc3BhdGNoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KFxuICBjb25maWd1cmVTdG9yZSxcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKFBpbmcpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGluZy5qcz9lbnRyeSIsImltcG9ydCAncnhqcydcblxuaW1wb3J0IHsgY29tYmluZUVwaWNzIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSdcbmltcG9ydCBwaW5nRXBpYyBmcm9tICcuL3BpbmdFcGljJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lRXBpY3MoXG4gIHBpbmdFcGljLFxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2VwaWNzL2luZGV4LmpzIiwiaW1wb3J0IHsgUElORywgUE9ORyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgeyBudWxsQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9waW5nJ1xuXG5jb25zdCBwaW5nRXBpYyA9IGFjdGlvbiQgPT5cbiAgYWN0aW9uJC5maWx0ZXIoYWN0aW9uID0+IFtQSU5HLCBQT05HXS5pbmNsdWRlcyhhY3Rpb24udHlwZSkpXG4gICAgLmRlbGF5KDEwMDApXG4gICAgLm1hcFRvKG51bGxBY3Rpb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgcGluZ0VwaWNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9lcGljcy9waW5nRXBpYy5qcyIsImltcG9ydCB7IGNyZWF0ZUVwaWNNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSdcbi8vIGltcG9ydCB7IGNhbGxTdGF0aWNBUEksIGNhbGxFdmVudFNvdXJjZSB9IGZyb20gJy4uL2xpYi9zZXJ2aWNlcydcbmltcG9ydCByb290RXBpYyBmcm9tICcuLi9lcGljcydcblxuLy8gY29uc3QgZGVwZW5kZW5jaWVzID0ge1xuLy8gICBjYWxsU3RhdGljQVBJLFxuLy8gICBjYWxsRXZlbnRTb3VyY2UsXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVwaWNNaWRkbGV3YXJlKHJvb3RFcGljLCB7IGRlcGVuZGVuY2llcyB9KVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXBpY01pZGRsZXdhcmUocm9vdEVwaWMpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbWlkZGxld2FyZS9lcGljTWlkZGxld2FyZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgcGluZyBmcm9tICcuL3BpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHBpbmcsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBQSU5HLCBQT05HLCBOVUxMIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gJ251bGwnLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUElORzpcbiAgICAgIHJldHVybiAncGluZydcbiAgICBjYXNlIFBPTkc6XG4gICAgICByZXR1cm4gJ3BvbmcnXG4gICAgY2FzZSBOVUxMOlxuICAgICAgcmV0dXJuICdudWxsJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3JlZHVjZXJzL3BpbmcuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcbmltcG9ydCBlcGljTWlkZGxld2FyZSBmcm9tICcuLi9taWRkbGV3YXJlL2VwaWNNaWRkbGV3YXJlJ1xuXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtlcGljTWlkZGxld2FyZV1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gc3RvcmVFbmhhbmNlci5wdXNoKERldlRvb2xzLmluc3RydW1lbnQoKSlcbiAgbWlkZGxld2FyZXMucHVzaChjcmVhdGVMb2dnZXIoKSlcbn1cblxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYsICdlbnYnKVxuXG5jb25zdCBzdG9yZUVuaGFuY2VyID0gW2FwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyldXG5jb25zdCBmaW5hbENyZWF0ZVN0b3JlID0gY29tcG9zZSguLi5zdG9yZUVuaGFuY2VyKShjcmVhdGVTdG9yZSlcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gaW5pdGlhbFN0YXRlID0+IGZpbmFsQ3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc3RvcmUvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQURBOztBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7O0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTs7QUFDQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBdEJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUE0QkE7O0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQURBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        