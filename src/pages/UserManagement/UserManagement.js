import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import AddUserModal from "../../Components/Modal/AddUserModal";
import EditUserModal from "../../Components/Modal/EditUserModal";
import { userServ } from "../../services/userService";
import UserAction from "./UserAction";
import UserTable from "./UserTable";

export default function UserManagement() {
  const [userList, setUserList] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);
  const handlesetAddUserModal = () => {
    setAddUserModal(!addUserModal);
  };
  let editUserModal = useSelector((state) => {
    return state.modalSlice.editUserModal;
  });
  useEffect(() => {
    let fetchUserList = () => {
      userServ
        .getUserList()
        .then((res) => {
          let data = res.data.content.map((user) => {
            return {
              ...user,
              action: <UserAction onSuccess={fetchUserList} user={user} />,
            };
          });
          setUserList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);
  return (
    <div className="max-w-layout mx-auto pt-10 relative">
      <div>
        <Button content={"Thêm Người Dùng"} f={handlesetAddUserModal} />
      </div>
      <div>
        <h3 className="text-center text-2xl">Danh Sách Người Dùng</h3>
        <UserTable userList={userList} />
      </div>
      {addUserModal && (
        <div className="">
          <AddUserModal handlesetAddUserModal={handlesetAddUserModal} />
        </div>
      )}
      {editUserModal && (
        <div className="">
          <EditUserModal />
        </div>
      )}
    </div>
  );
}
