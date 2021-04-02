import React from 'react';

// only using functional components with Hooks.

function MovieList(props) {
	return (
		<div>
			<div>
				{movies.map(movie => {
					return <h2>{movie}</h2>;
				})}
			</div>
		</div>
	);
}

export default MovieList;
