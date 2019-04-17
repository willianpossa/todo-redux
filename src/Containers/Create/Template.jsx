import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RandomID from '../../Helpers/RandomID'

import { createTodo } from '../../Actions/Todos'

class Create extends Component {

	state = {
		form: {
			title: '',
			completed: false
		}
	}

	handleChange = ({ target: { name, value, type, checked }}) => {
		const fieldValue = type === 'checkbox' ? checked : value;

		this.setState(prevState => ({
			...prevState,
			form: {
				...prevState.form,
				[name]: fieldValue
			}
		}))
	}

	createItem = () => {
		const { title, completed } = this.state.form

		const todo = {
			id: RandomID(),
			userId: 1,
			title,
			completed
		}

		this.props.dispatch(createTodo(todo))

		this.setState(prevState => ({
			...prevState,
			form: {
				name: '',
				completed: false
			}
		}))

		this.props.history.push('/')
	}
	
  	render() {
		const { title, completed } = this.state.form

    	return (
			<div className="App">
				<Link to="/">Voltar</Link>
                <div className="form-holder">
					<input type="text" value={ title } name="title" onChange={ this.handleChange } />
					<input type="checkbox" checked={ completed } name="completed" onChange={ this.handleChange } />
					<button onClick={ this.createItem }>Criar item</button>
				</div>
			</div>
    	);
  	}
}

export default connect(null)(Create)