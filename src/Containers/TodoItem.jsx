import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateTodo, removeTodo } from '../Actions/Todos'

class TodoItem extends Component {
	
  	render() {
        const { todo } = this.props

    	return (
			<li className="todo-item">
                <input 
                    type="checkbox" 
                    className="checkbox-input" 
                    checked={ todo.completed } 
                    onChange={ () => { this.props.dispatch(updateTodo(todo.id)) } } 
                />
                { todo.title }
                <button onClick={ () => { this.props.dispatch(removeTodo(todo.id)) } }>Remove</button>
            </li>
    	);
  	}
}

export default connect(null)(TodoItem)