import { createStore } from 'redux'

import Reducer from './Reducers'
import Middleware from './Middlewares'

const Store = createStore(Reducer, Middleware)

export default Store