import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favorites } = useMovieContext();
  console.log(favorites);

  if (favorites.length > 0)
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="favorites-empty">
      <h2>No Favourites Movies Yet</h2>
      <p>Start Adding Movies to your favourites, and they will appear here</p>
    </div>
  );
}

export default Favourites;
