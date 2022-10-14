import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import Style from "./AddUserModal.module.css";
import { userServ } from "../../services/userService";
import { seteditUserModal } from "../../redux/slice/modalslice";
import { useDispatch, useSelector } from "react-redux";
import { localServ } from "../../services/localService";
import { setEditedUserInfor } from "../../redux/slice/userSlice";
export default function EditUserModal({ user }) {
  let { editinguser } = useSelector((state) => {
    return state.userSlice;
  });
  const maNhom = localServ.user.get()?.maNhom;
  const { Option } = Select;
  const onFinish = (values) => {
    userServ
      .editUser(values)
      .then((res) => {
        message.success("Cập nhật Người Dùng Thành Công");
        dispatch(setEditedUserInfor(res.data.content));
        dispatch(seteditUserModal(!editUserModal));
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let dispatch = useDispatch();
  let editUserModal = useSelector((state) => {
    return state.modalSlice.editUserModal;
  });
  const handleEditUserModal = () => {
    dispatch(seteditUserModal(!editUserModal));
  };
  return (
    <div>
      <div
        onClick={handleEditUserModal}
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
            initialValues={{
              taiKhoan: editinguser.taiKhoan,
              matKhau: editinguser.matKhau,
              email: editinguser.email,
              soDt: editinguser.soDT,
              maNhom: maNhom,
              maLoaiNguoiDung: editinguser.maLoaiNguoiDung,
              hoTen: editinguser.hoTen,
            }}
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
                    required: false,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input disabled />
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
                <Input />
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
                      Cập Nhật
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
