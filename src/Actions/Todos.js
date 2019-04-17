import API from '../Config/Request'

import {
    handleFetchTodos,
    handleSuccessFetchTodos,
    handleErrorFetchTodos,
    handleUpdateStatusTodo,
    handleRemoveTodo,
    handleCreateTodo
} from './Creators'

export const fetchData = _ => {
    return (dispatch, getState) => {
        const { todos } = getState().Todos

        if(todos.length > 0)
            return

        dispatch(handleFetchTodos())

        return API.get('/todos?_limit=8').then(({status, data}) => {
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

export const removeTodo = todo_id => {
    return dispatch => {
        dispatch(handleRemoveTodo(todo_id))
    }
}

export const createTodo = todo => {
    return dispatch => {
        dispatch(handleCreateTodo(todo))
    }
}