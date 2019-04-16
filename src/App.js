import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import RoutePaths from './Routes'

class App extends Component {

	componentDidMount() {}
	
  	render() {
    	return (
			<Router>
				<div className="container">
					<Route render={ ({location}) => (
						<Switch location={ location }>
							{ RoutePaths.map(route => (
								<Route key={ location } exact={ route.exact } path={ route.path } component={ route.component } />
							))}
						</Switch>
					)} />
				</div>
			</Router>
    	);
  	}
}

export default App
