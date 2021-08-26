import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from '../pages/Post';
import routes from './routes';
const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						exact
						path={path}
						component={() => <Component page={key} />}
					></Route>
				))}
				// ↓↓↓↓↓ Added my own route ↓↓↓↓↓
				<Route
					path={'/:id'}
					exact // Gets put in props.params.id.
					render={routerProps => <Post {...routerProps} />} // Individual Post.
				></Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
