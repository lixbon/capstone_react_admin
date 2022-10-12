import { message } from "antd";
import React from "react";
import { moviesServ } from "../../services/movieService";

export default function MovieAction({ maPhim, onSuccess }) {
  const handleDeleteMovie = () => {
    moviesServ
      .deleteMovie(maPhim)
      .then((res) => {
        message.success("Xoá Phim Thành Công");
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
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
