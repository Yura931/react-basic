import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getMovies();
    }, []);
  
    const getMovies = async() => {
      const params = new URLSearchParams({
        minimum_rating : "9",
        sort_by : "year"
      }).toString();
  
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?${params}`
          )
        ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    return (
      <div>
        {loading ? <h1>Loading...</h1> : 
        <div>
          {movies.map((movie) => {
            return ( 
              <Movie 
                key={movie.id} 
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
               />
            )
          })}  
        </div>
        }
      </div>
    );
}

export default Home;