import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading((current) => !current);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres); // TODO setGenres(movie.genres) 로는 세팅이 안됨
    // console.log(json);
  }, [id]);
  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>
            <span>{movie.year} / </span>
            {genres.map((g) => (
              <span key={g}>{g} / </span>
            ))}
            <span>{movie.runtime} min</span>
          </p>
          <p>
            <b>
              <span style={{ color: "green" }}>
                Download : {movie.download_count}
              </span>
            </b>
            &nbsp;
            <b>
              <span style={{ color: "red" }}>Like : {movie.like_count}</span>
            </b>
          </p>

          <p>{movie.description_full}</p>
          <dl>
            <dt>
              <strong>Rating</strong>
            </dt>
            <dd>{movie.rating}</dd>
            <dt>
              <strong>Uploaded</strong>
            </dt>
            <dd>{movie.date_uploaded}</dd>
          </dl>
        </div>
      )}
    </div>
  );
}
export default Detail;