import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
    CREATE_TODO,
    REMOVE_TODO,
    UPDATE_TODO
} from './Types'

// Todos Creators

/**
 * Initialize Fetch Data
 * @param {empty} _ 
 */
export const handleFetchTodos = _ => {
    return {
        type: FETCH_TODOS
    }
}

/**
 * Success fetch data
 * @param {array} todos - array of todos
 */
export const handleSuccessFetchTodos = todos => {
    return {
        type: FETCH_TODOS_SUCCESS,
        todos
    }
}

/**
 * 
 * @param {empty} _ 
 */
export const handleErrorFetchTodos = _ => {
    return {
        type: FETCH_TODOS_ERROR
    }
}

export const handleUpdateStatusTodo = todo_id => {
    return {
        type: UPDATE_TODO,
        todo_id
    }
}

export const handleRemoveTodo = todo_id => {
    return {
        type: REMOVE_TODO,
        todo_id
    }
}

export const handleCreateTodo = todo => {
    return {
        type: CREATE_TODO,
        todo
    }
}