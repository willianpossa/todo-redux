import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Todos from './todoReducer'

const persistConfig = {
    key: 'root',
    storage,
}

const RootReducer = combineReducers({
    Todos
})

export default persistReducer(persistConfig, RootReducer)