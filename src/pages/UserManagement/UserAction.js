import { message } from "antd";
import React from "react";
import { userServ } from "../../services/userService";

export default function UserAction({ taiKhoan, onSuccess }) {
  const handleDeleteUser = () => {
    userServ
      .deleteUser(taiKhoan)
      .then((res) => {
        message.success("Delete success");
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
        onClick={handleDeleteUser}
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
