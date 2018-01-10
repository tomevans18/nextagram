import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'

import configureStore from '../js/store'
import { pingAction, pongAction } from '../js/actions/ping'

class Ping extends Component {
  static propTypes = {
    ping: PropTypes.string.isRequired,
  }

  // static getInitialProps({ store }) {
  //   store.dispatch(pingAction())
  // }

  render() {
    const { ping, callPong, callPing } = this.props
    return (
      <div>
        <p>
          Status: <b>{ ping }</b>
        </p>
        <button
          onClick={callPing}
          type='button'>
          Ping
        </button>
        <button
          onClick={callPong}
          type='button'>
          Pong
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ping: state.ping,
})

const mapDispatchToProps = dispatch => ({
  callPong: bindActionCreators(pongAction, dispatch),
  callPing: bindActionCreators(pingAction, dispatch)
})

export default withRedux(
  configureStore,
  mapStateToProps,
  mapDispatchToProps,
)(Ping)