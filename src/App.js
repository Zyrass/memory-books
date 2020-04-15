import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom';

import { Header, Home, Memory, WhoIAm } from './components';

// import Styles from './App.module.scss';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/Accueil' component={Home} />
					<Route path='/Mémoires' component={Memory} />
					<Route path='/Qui-suis-je' component={WhoIAm} />
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}

export default App;
