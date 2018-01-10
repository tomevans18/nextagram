import { PING, PONG } from '../actions/actionTypes'
import { nullAction } from '../actions/ping'

const pingEpic = action$ =>
  action$.filter(action => [PING, PONG].includes(action.type))
    .delay(1000)
    .mapTo(nullAction())

export default pingEpic