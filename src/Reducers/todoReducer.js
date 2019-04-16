import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
    CREATE_TODO,
    REMOVE_TODO,
    UPDATE_TODO
} from '../Actions/Types'

const defaultState = {
    loading: false,
    todos: []
}

export default function todoReducers(state = defaultState, action) {
    let { todos } = state

    switch(action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                loading: true
            }

        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.todos
            }

        case FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false
            }

        case CREATE_TODO:
            todos = todos.concat([action.todo])

            return {
                ...state,
                todos
            }

        case REMOVE_TODO:
            todos = todos.filter(todo => todo.id !== action.todo_id)

            return {
                ...state,
                todos
            }

        case UPDATE_TODO:
            todos = todos.map(todo => {
                if(todo.id === action.todo_id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return {
                    ...todo
                }
            })

            return {
                ...state,
                todos
            }

        default:
            return state
    }
}