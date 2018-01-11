'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../js/store');

var _store2 = _interopRequireDefault(_store);

var _ping = require('../js/actions/ping');

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