import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/localService";
import Button from "../Button/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";

export default function UserNav() {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  const handleLogOut = () => {
    localServ.user.remove();

    window.location.href = "/login";
  };

  return (
    <div className="space-x-4 flex items-center">
      <span className="text-white ">
        <AiOutlineSearch size={30} />
      </span>
      <span className="text-white">
        <RiAdminLine size={30} />
      </span>
      {!user ? (
        <NavLink to="/login" className="">
          <Button content={"Đăng Nhập"} />
        </NavLink>
      ) : (
        <div className="flex space-x-4">
          <h3 className="text-white underline text-xl hover:text-green-400 hover:scale-105 cursor-pointer duration-200">
            {user.taiKhoan}
          </h3>
          <Button content={"Đăng Xuất"} f={handleLogOut} />
        </div>
      )}
    </div>
  );
}
