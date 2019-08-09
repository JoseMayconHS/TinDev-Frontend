import React from 'react'
import { 
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Redirect 
} from 'react-router-dom'

import Home from './pages/Home/'
import Main from './pages/Main/'

const Routes = () => 
	<Router>
		<Switch>
			<Route exact path='/' component={ Home }  />
			<Route exact path='/dashboard/:id' component={ Main }  />
			<Redirect from='*' to='/' />
		</Switch>
	</Router>

export default Routes
