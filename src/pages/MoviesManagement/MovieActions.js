import { message } from "antd";
import React from "react";
import { moviesServ } from "../../services/movieService";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingslice";
import { useDispatch } from "react-redux";

export default function MovieAction({ maPhim, onSuccess }) {
  let dispatch = useDispatch();
  const handleDeleteMovie = () => {
    dispatch(setLoadingON());
    moviesServ
      .deleteMovie(maPhim)
      .then((res) => {
        message.success("Xoá Phim Thành Công");
        onSuccess();
        dispatch(setLoadingOFF());
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
        dispatch(setLoadingOFF());
      });
  };
  return (
    <div className="space-x-1">
      <button
        onClick={handleDeleteMovie}
        className="border px-2 py-1 rounded bg-red-400 text-white hover:scale-110"
      >
        Remove
      </button>
      <button className="border px-2 py-1 rounded bg-cyan-400 text-white hover:scale-110">
        Edit
      </button>
    </div>
  );
}
