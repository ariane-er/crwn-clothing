import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
	return(
		<div>
			Hats
		</div>
	)
}

function App() {
	return (
		<div>
			<Switch> {/* the moment it finds a matching path, it doesn't render anything else but that. */}
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
			
		</div>
	);
}

export default App;
