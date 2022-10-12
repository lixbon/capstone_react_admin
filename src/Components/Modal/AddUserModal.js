import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import Style from "./AddUserModal.module.css";
import { userServ } from "../../services/userService";
export default function AddUserModal({ handlesetAddUserModal }) {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log(values);
    userServ
      .addUser(values)
      .then((res) => {
        console.log(res);
        message.error("Thêm Người Dùng Thành Công");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div
        onClick={handlesetAddUserModal}
        className="h-screen w-screen top-0 left-0 fixed bg-black opacity-60 z-10"
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-1/2">
        <div className="w-full h-full flex items-center justify-center">
          <Form
            className={`${Style["cardglass"]} w-full`}
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className=" p-4">
              <Form.Item
                label="Tài Khoản"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật Khẩu"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số Điện Thoại"
                name="soDt"
                rules={[
                  {
                    required: true,
                    message: "Please input your PhoneNumber!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mã Nhóm"
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: "Please input your Group!",
                  },
                ]}
              >
                <Select
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="GP01">Nhóm GP01</Option>
                  <Option value="GP02">Nhóm GP02</Option>
                  <Option value="GP03">Nhóm GP03</Option>
                  <Option value="GP04">Nhóm GP04</Option>
                  <Option value="GP05">Nhóm GP05</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Loại Người Dùng"
                name="maLoaiNguoiDung"
                rules={[
                  {
                    required: true,
                    message: "Please input your type of account!",
                  },
                ]}
              >
                <Select
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="QuanTri">Quản Trị</Option>
                  <Option value="KhachHang">Khách Hàng</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Họ Và Tên"
                name="hoTen"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <div
                  className="space-y-4 py-4
            "
                >
                  <div className="justify-center items-center flex">
                    <Button type="primary" htmlType="submit">
                      Thêm
                    </Button>
                  </div>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
