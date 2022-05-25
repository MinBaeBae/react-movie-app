import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	//old way of doing it
	// .then((response) => response.json())
	// .then((json) => {
	// 	setMovies(json.data.movies);
	// 	setLoading(false);
	// });

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<img src={movie.medium_cover_image} alt="movie poster" />
							<h2>{movie.title}</h2>
							<h4>{movie.year}</h4>
							<p>{movie.summary}</p>
							<ul>
								<li>
									{movie.genres.map((g) => (
										<li key={g}>{g}</li>
									))}
								</li>
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
