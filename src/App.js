import React, { useState } from 'react';
import './App.css';

// useState is one of the available React hooks.

function App() {
	// movies = for getting movies. setMovies for changing the movies.
	// useState hook
	// we will maintain the state for the movies on this component. we will also use hooks.
	const [movies, setMovies] = useState(['Movie 1', 'Movie 2']);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie Rater</h1>
				<div className="layout">
					<div>
						{movies.map(movie => {
							return <h2>{movie}</h2>;
						})}
					</div>
					<div>Movie list</div>
					<div>Movie details</div>
				</div>
			</header>
		</div>
	);
}

export default App;
