import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

import Reducer from './Reducers'
import Middleware from './Middlewares'

export const store = createStore(Reducer, Middleware)
export const persistor = persistStore(store)