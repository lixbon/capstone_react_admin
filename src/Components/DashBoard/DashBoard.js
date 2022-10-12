import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsFilm } from "react-icons/bs";

export default function DashBoard() {
  let navigate = useNavigate();
  const handlegoDashBoard = () => {
    navigate("/");
  };
  const handlegoUserManagerment = () => {
    navigate("/usermanagerment");
  };
  const handlegoMovieManagement = () => {
    navigate("/moviesmanagerment");
  };

  return (
    <div className="h-full text-white pl-8 py-8">
      <h2
        onClick={handlegoDashBoard}
        className="text-white text-2xl cursor-pointer hover:scale-105 hover:text-blue-500 duration-200"
      >
        DashBoard
      </h2>
      <div className="space-y-4 pl-6">
        <div className="flex items-center space-x-2">
          <AiOutlineUser size={20} />
          <h3
            onClick={handlegoUserManagerment}
            className="cursor-pointer text-xl text-white mb-0"
          >
            Quản lí User
          </h3>
        </div>
        <div className="flex items-center space-x-2 ">
          <BsFilm size={20} />
          <h3
            onClick={handlegoMovieManagement}
            className="cursor-pointer text-xl text-white mb-0"
          >
            Quản Lý Phim
          </h3>
        </div>
      </div>
    </div>
  );
}
