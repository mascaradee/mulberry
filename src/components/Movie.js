import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * 목표
 * Link: 새로고침이 없이 페이지 이동을 할 수 있게 해준다. 전환?
 * <a> 태그와 비교하여 알아둘것
 *
 * TIPS
 * url에 props를 덧붙일때 $를 덧붙여줘야 한다.
 */

function Movie({ id, coverImg, url, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* <a href="/movie">{title}</a> */}
      </h1>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Movie;
