import { combineReducers } from 'redux'

import Todos from './todoReducer'

const RootReducer = combineReducers({
    Todos
})

export default RootReducer