import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const RootMiddleware = applyMiddleware(
    thunk
)

export default RootMiddleware