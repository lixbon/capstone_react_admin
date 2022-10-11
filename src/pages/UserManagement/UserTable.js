import { Space, Table, Tag } from "antd";
import React from "react";
import { headColumns } from "./utils.usermanagement";

const UserTable = ({ userList }) => (
  <Table
    rowKey={(record) => record.taiKhoan}
    columns={headColumns}
    dataSource={userList}
  />
);

export default UserTable;
