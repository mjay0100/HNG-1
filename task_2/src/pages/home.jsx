/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
const URL = "https://api.themoviedb.org/3/discover/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmQxMThhZmVlZjNmYmE0ZTAwYzI5YzBiMjBiYzkyYyIsInN1YiI6IjY0ZmY4MzQ4NmEyMjI3MDBmZDFmYmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ii6S1UR_AFo2bOp66x2txpdTzalEb6yWZA2wlSBTEk4",
  },
};

const home = () => {
  const [movie, setMovie] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(URL, options);
      const result = await response.json();
      console.log("Koca: result ", result);
      setMovie(result.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleFavourite = (id) => {
    // movie.map((movie) => {
    //   if (movie.id === id) {
    //     setIsFavourite(!isFavourite);
    //   }
    // });
  };

  return (
    <>
      <h1 className="text-2xl text-center my-8">Featured Movie</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center w-[70%] mx-auto">
        {movie.slice(0, 10).map((movie) => {
          return (
            <div className="" key={movie.id}>
              <div className="relative">
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                <div onClick={() => handleFavourite(movie.id)}>
                  {" "}
                  {isFavourite ? (
                    <MdFavoriteBorder className="absolute top-3 right-3 text-2xl bg-[#D1D5DB] rounded-full p-1" />
                  ) : (
                    <MdFavorite className="absolute top-3 right-3 text-2xl bg-[#D1D5DB] rounded-full p-1" />
                  )}
                </div>
              </div>
              <p>{movie.title}</p>
              <Link to={`/${movie.id}`}>
                <button>more info</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default home;
