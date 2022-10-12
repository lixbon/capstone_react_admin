import React from "react";
import { BiAddToQueue, BiFilm } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();
  const handlegoUserManagement = () => {
    navigate("/usermanagerment");
  };
  const handlegoMoviesManagement = () => {
    navigate("/moviesmanagerment");
  };
  return (
    <div>
      <div className="max-w-layout mx-auto h-[80vh] flex justify-center items-center">
        <div className="grid grid-cols-2 w-full gap-5">
          <div className=" border border-gray-400 flex justify-center items-center py-20 rounded-3xl">
            <div
              onClick={handlegoUserManagement}
              className="flex flex-col justify-center items-center px-4 py-6 border border-slate-900 rounded-3xl cursor-pointer"
            >
              <h2 className="text-xl">Quản Lý Người Dùng</h2>
              <BiAddToQueue size={50} />
            </div>
          </div>
          <div className=" border border-gray-400 flex justify-center items-center py-20 rounded-3xl">
            <div
              onClick={handlegoMoviesManagement}
              className="flex flex-col justify-center items-center px-4 py-6 border border-slate-900 rounded-3xl cursor-pointer"
            >
              <h2 className="text-xl">Quản Lý NPhim</h2>
              <BiFilm size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
