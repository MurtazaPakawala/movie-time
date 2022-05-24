import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../component/SingleContent/SingleContent";
const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <h1>Trending</h1>
      <div className="Trending">
        {content &&
          content.map((c) => (
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
};

export default Trending;
