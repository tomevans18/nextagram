import { PING, PONG, NULL } from '../actions/actionTypes'

export default (state = 'null', action) => {
  switch (action.type) {
    case PING:
      return 'ping'
    case PONG:
      return 'pong'
    case NULL:
      return 'null'
    default:
      return state
  }
}