import React, { useEffect, useState } from "react";
import { moviesServ } from "../../services/movieService";
import MovieAction from "./MovieActions";
import MoviesTable from "./MoviesTable";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingslice";
import { useDispatch } from "react-redux";

export default function MovieManagement() {
  const [MoviesList, setMoviesList] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    let fetchMoviesList = () => {
      dispatch(setLoadingON());
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
          dispatch(setLoadingOFF());
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoadingOFF());
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
