import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    TodoHolder,
    CheckboxHolder,
    CheckboxMarker,
    TodoCheckbox,
    TodoLabel,
    TodoRemove
} from './Style'

class TodoItem extends Component {
	
  	render() {
        const { todo, updateTodo, removeTodo } = this.props

    	return (
            <TodoHolder>
                <CheckboxHolder>
                    <TodoCheckbox 
                        type="checkbox"
                        id={ todo.id }
                        checked={ todo.completed } 
                        onChange={ updateTodo }   
                    />
                    <CheckboxMarker></CheckboxMarker>
                </CheckboxHolder>
                <TodoLabel htmlFor={ todo.id } completed={ todo.completed }>
                    { todo.title }
                </TodoLabel>
                <TodoRemove onClick={ removeTodo }>Excluir</TodoRemove>
            </TodoHolder>
    	);
  	}
}

export default connect(null)(TodoItem)