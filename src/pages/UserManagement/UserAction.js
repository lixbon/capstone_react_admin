import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingslice";
import { seteditUserModal } from "../../redux/slice/modalslice";
import { setEditingUserInfor } from "../../redux/slice/userSlice";
import { userServ } from "../../services/userService";

export default function UserAction({ user, onSuccess }) {
  let editUserModal = useSelector((state) => {
    return state.modalSlice.editUserModal;
  });
  let dispatch = useDispatch();
  const handleEditUserModal = () => {
    dispatch(seteditUserModal(!editUserModal));
    dispatch(setEditingUserInfor(user));
  };
  const handleDeleteUser = () => {
    dispatch(setLoadingON());
    userServ
      .deleteUser(user.taiKhoan)
      .then((res) => {
        message.success("Delete success");
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
        onClick={handleDeleteUser}
        className="border px-2 py-1 rounded bg-red-400 text-white hover:scale-110"
      >
        Remove
      </button>
      <button
        onClick={handleEditUserModal}
        className="border px-2 py-1 rounded bg-cyan-400 text-white hover:scale-110"
      >
        Edit
      </button>
      <NavLink
        to={`/usermanagerment/${user.taiKhoan}`}
        className="border px-2 py-1 rounded bg-yellow-400 text-white hover:scale-110"
      >
        UserInfo
      </NavLink>
    </div>
  );
}
