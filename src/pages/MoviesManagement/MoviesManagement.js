import React, { useEffect, useState } from "react";
import { moviesServ } from "../../services/movieService";
import MovieAction from "./MovieActions";
import MoviesTable from "./MoviesTable";

export default function MovieManagement() {
  const [MoviesList, setMoviesList] = useState([]);
  useEffect(() => {
    let fetchMoviesList = () => {
      moviesServ
        .getListMovie()
        .then((res) => {
          let data = res.data.content.map((item) => {
            return {
              ...item,
              action: (
                <MovieAction onSuccess={fetchMoviesList} maPhim={item.maPhim} />
              ),
            };
          });
          setMoviesList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMoviesList();
  }, []);
  return (
    <div className="max-w-layout mx-auto">
      <MoviesTable MoviesList={MoviesList} />
    </div>
  );
}
