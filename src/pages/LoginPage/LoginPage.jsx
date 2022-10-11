import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import bg_animate from "../../assets/bg_login.json";
import { userServ } from "../../services/userService";
import { setUserInfor } from "../../redux/slice/userSlice";
import { localServ } from "../../services/localService";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServ
      .postLogin(values)
      .then((res) => {
        console.log(res);
        dispatch(setUserInfor(res.data.content));
        localServ.user.set(res.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center p-10">
      <div className="w-1/2 h-full">
        <Lottie animationData={bg_animate} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="border border-blue-500 w-full"
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
          <Form.Item
            label="Username"
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
            label="Password"
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
