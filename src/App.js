import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';

// useState is one of the available React hooks.

function App() {
	// movies = for getting movies. setMovies for changing the movies.
	// useState hook
	// we will maintain the state for the movies on this component. we will also use hooks.
	const [movies, setMovies] = useState(['Movie 1', 'Movie 2']);

	// providing the empty array argument means the application will run only once.
	useEffect(() => {
		fetch('http://127.00.0.1:8000/api/movies/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token 23r8uoowepaoiufawopieufoapsisu'
			}
		})
			.then(resp => resp.json())
			.then(resp => setMovies(resp))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie Rater</h1>
				<div className="layout">
					<MovieList />

					<div>Movie list</div>
					<div>Movie details</div>
				</div>
			</header>
		</div>
	);
}

export default App;
