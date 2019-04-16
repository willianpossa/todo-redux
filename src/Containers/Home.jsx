import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchData } from '../Actions/Todos'
import TodoItem from './TodoItem';

class Home extends Component {
	componentDidMount() {
        this.props.dispatch(fetchData())
    }
	
  	render() {
		const { todos, loading } = this.props

    	return (
			<div className="App">
                <Link to="/create-todo">Criar Tarefa</Link>
				{ loading 
					? <p>Carregando...</p>
					: <ul className="todos-list">
						{ todos.map(todo => (
							<TodoItem key={ todo.id } todo={ todo } />
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

export default connect(mapStateToProps)(Home)