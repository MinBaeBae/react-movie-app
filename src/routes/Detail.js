import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
	const { id } = useParams();
	const [detail, setDetail] = useState();
	const [loading, setLoading] = useState(true);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setDetail(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<div>
						<div>
							<img src={detail.medium_cover_image} alt={detail.title} />
						</div>
						<div>
							<h2>{detail.title_long}</h2>
							<div>
								<ul>
									{detail.genres.map((genre) => (
										<li key={genre}>{genre}</li>
									))}
								</ul>
								<h3>⭐ {detail.rating}</h3>
								<h3>
									{Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
								</h3>
							</div>
							<p>{detail.description_full}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
