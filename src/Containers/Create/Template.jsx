import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RandomID from '../../Helpers/RandomID'

import { createTodo } from '../../Actions/Todos'

import { 
	AppHolder, 
	TitleApp, 
	LinkHolder, 
	FormHolder,
	FieldGroup,
	FieldLabel,
	CheckboxHolder,
	CheckboxMarker,
    FieldInput,
    Button
} from './Style'

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
			<AppHolder>
				<LinkHolder>
                    <Link to="/">{ '< Voltar' }</Link>
					<TitleApp>Criar Tarefa</TitleApp>
                </LinkHolder>
				<FormHolder>
					<FieldGroup>
						<FieldLabel htmlFor="title">Título</FieldLabel>
						<FieldInput 
							type="text" 
							id="title"
							value={ title } 
							name="title" 
							onChange={ this.handleChange } 
						/>
					</FieldGroup>
					<FieldGroup className="inline-field">
						<CheckboxHolder>
							<FieldInput 
								type="checkbox" 
								id="completed"
								checked={ completed } 
								name="completed" 
								onChange={ this.handleChange }
							/>
							<CheckboxMarker></CheckboxMarker>
						</CheckboxHolder>
						<FieldLabel htmlFor="completed">
							Tarefa Concluída
						</FieldLabel>
					</FieldGroup>
					<Button visible={ title !== '' } onClick={ this.createItem }>Criar Tarefa</Button>
				</FormHolder>
            </AppHolder>
    	);
  	}
}

export default connect(null)(Create)