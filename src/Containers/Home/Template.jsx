import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchData, updateTodo, removeTodo } from '../../Actions/Todos'
import TodoItem from '../../Components/TodoItem/Template';

import { AppHolder, TitleApp, TodoList, TodoListHolder, LinkHolder } from './Style'

class Home extends Component {
	componentDidMount() {
        this.props.dispatch(fetchData())
    }
	
  	render() {
		const { todos, loading, dispatch } = this.props

    	return (
			<AppHolder>
				{ loading 
					? <p>Carregando...</p>
					: <TodoListHolder>
                        <TitleApp>Todo List</TitleApp>
                        <TodoList>
                            { todos.map(todo => (
                                <TodoItem 
                                    key={ todo.id } 
                                    todo={ todo } 
                                    updateTodo={ () => { dispatch(updateTodo(todo.id)) } }
                                    removeTodo={ () => { dispatch(removeTodo(todo.id)) } }
                                />
                            ))}
                        </TodoList>
                    </TodoListHolder>
                }
                <LinkHolder>
                    <Link to="/create-todo">Criar Tarefa</Link>
                </LinkHolder>
            </AppHolder>
    	);
  	}
}

const mapStateToProps = ({ Todos: { todos, loading} }) => {
	return {
		todos: todos,
		loading
	}
}

export default connect(mapStateToProps)(Home)