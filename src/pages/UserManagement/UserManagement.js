import React, { useEffect, useState } from "react";
import { userServ } from "../../services/userService";
import UserAction from "./UserAction";
import UserTable from "./UserTable";

export default function UserManagement() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      userServ
        .getUserList()
        .then((res) => {
          let data = res.data.content.map((item) => {
            return {
              ...item,
              action: (
                <UserAction
                  onSuccess={fetchUserList}
                  taiKhoan={item.taiKhoan}
                />
              ),
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
    <div className="max-w-layout mx-auto">
      <UserTable userList={userList} />
    </div>
  );
}
