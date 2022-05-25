import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt="{title} poster" />
			<h2>
				<Link to="/movie">{title}</Link>
			</h2>
			<h4>{year}</h4>
			<p>{summary}</p>
			<ul>
				<li>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</li>
			</ul>
		</div>
	);
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
