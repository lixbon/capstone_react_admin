import { Tag } from "antd";

export const headColumns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Name",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Account",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: " Type of Account ",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text == "QuanTri") {
        return <Tag color="red">Admin</Tag>;
      } else {
        return <Tag color="blue">Customer</Tag>;
      }
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
