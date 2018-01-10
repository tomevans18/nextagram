import { createEpicMiddleware } from 'redux-observable'
// import { callStaticAPI, callEventSource } from '../lib/services'
import rootEpic from '../epics'

// const dependencies = {
//   callStaticAPI,
//   callEventSource,
// }

// export default createEpicMiddleware(rootEpic, { dependencies })
export default createEpicMiddleware(rootEpic)