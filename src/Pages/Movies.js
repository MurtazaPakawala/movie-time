import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../component/SingleContent/SingleContent";
import "./Trending.css";
function Movies() {
  const [movie, setMovie] = useState([]);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    console.log(data);
    setMovie(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Movies</h1>
      <div className="trending">
        {movie &&
          movie.map((c) => (
            <SingleContent
              key={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              des={c.overview}
            />
          ))}
      </div>
    </div>
  );
}

export default Movies;
