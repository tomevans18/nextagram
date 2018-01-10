import 'rxjs'

import { combineEpics } from 'redux-observable'
import pingEpic from './pingEpic'

export default combineEpics(
  pingEpic,
)