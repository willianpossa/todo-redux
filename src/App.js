import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchData, updateTodo } from './Actions/Todos'

class App extends Component {

	updateStatusTodo = (todo_id) => {
		this.props.dispatch(updateTodo(todo_id))
	}

	componentDidMount() {
		this.props.dispatch(fetchData())
	}
	
  	render() {
		const { todos, loading } = this.props

    	return (
			<div className="App">
				{ loading 
					? <p>Carregando...</p>
					: <ul className="todos-list">
						{ todos.map(todo => (
							<li key={ todo.id } className="todo-item">
								<input type="checkbox" className="checkbox-input" checked={ todo.completed } onChange={ () => { this.updateStatusTodo(todo.id) } } />
								{ todo.title }
							</li>
						))}
					</ul>
				}
			</div>
    	);
  	}
}

const mapStateToProps = ({ Todos: { todos, loading} }) => {
	return {
		todos,
		loading
	}
}

export default connect(mapStateToProps)(App)
