import API from '../Config/Request'

import {
    handleFetchTodos,
    handleSuccessFetchTodos,
    handleErrorFetchTodos,
    handleUpdateStatusTodo
} from './Creators'

export const fetchData = _ => {
    return dispatch => {
        dispatch(handleFetchTodos())

        return API.get('/todos').then(({status, data}) => {
            if(status === 200) {
                dispatch(handleSuccessFetchTodos(data))
            }
        }).catch(error => {
            console.log(error)

            dispatch(handleErrorFetchTodos())
        })
    }
}

export const updateTodo = todo_id => {
    return dispatch => {
        dispatch(handleUpdateStatusTodo(todo_id))
    }
}