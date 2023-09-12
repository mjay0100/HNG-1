/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmQxMThhZmVlZjNmYmE0ZTAwYzI5YzBiMjBiYzkyYyIsInN1YiI6IjY0ZmY4MzQ4NmEyMjI3MDBmZDFmYmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ii6S1UR_AFo2bOp66x2txpdTzalEb6yWZA2wlSBTEk4",
  },
};

const singleMovie = () => {
  const [movie, setMovie] = React.useState(null);
  const { id } = useParams;
  //   const URL = `https://api.themoviedb.org/3/movie/${id}`;

  return <div>{id}</div>;
};

export default singleMovie;
