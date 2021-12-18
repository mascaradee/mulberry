import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

/**
 * 목표
 * 응답이 있으면 로딩을 없애고 아니면 계속 보임
 * 영화 API를 한번만 호출
 * 응답값을 async-await로 받아보자
 * 응답값을 map을 이용해서 적절히 노출시킨다
 *
 * TIP
 *
 * Challenge
 *
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  // then을 사용한 방식
  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      <h1>Movie Selection</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <a href={movie.url}>
                <h1>{movie.title}</h1>
              </a>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
