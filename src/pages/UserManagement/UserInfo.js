import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadingOFF, setLoadingON } from "../../redux/slice/loadingslice";
import { userServ } from "../../services/userService";

export default function UserInfo() {
  const { taikhoan } = useParams();
  const [thongTinUser, setthongTinUser] = useState({});
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingON());
    userServ
      .getUserInfo(taikhoan)
      .then((res) => {
        dispatch(setLoadingOFF());
        setthongTinUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOFF());
      });
  }, []);
  return (
    <div className="pt-10 px-4">
      <h2 className="text-center text-3xl">Thông Tin Tài Khoản</h2>
      <div className="border border-slate-600 p-4">
        <div>
          <h1>
            Tài Khoản:{" "}
            <span className="text-blue-500">{thongTinUser.taiKhoan}</span>
          </h1>
          <h1>
            Họ Tên: <span className="text-blue-500">{thongTinUser.hoTen}</span>
          </h1>
          <h1>
            Email: <span className="text-blue-500">{thongTinUser.email}</span>
          </h1>
          <h1>
            Số điện thoại:{" "}
            <span className="text-blue-500">{thongTinUser.soDT}</span>
          </h1>
          <h1>
            Mật Khẩu:{" "}
            <span className="text-blue-500">{thongTinUser.matKhau}</span>
          </h1>
          <h1>
            Nhóm: <span className="text-blue-500">{thongTinUser.maNhom}</span>
          </h1>
        </div>
        <div>
          <hr />
          <h2 className="text-xl text-center mt-4">Thông Tin Phim Đã Đặt</h2>
          <div className="grid grid-cols-4 gap-6">
            {thongTinUser.thongTinDatVe?.map(
              ({ danhSachGhe, hinhAnh, tenPhim, maVe }, index) => {
                return (
                  <div
                    key={index}
                    className="border border-slate-600 p-4 rounded-xl"
                  >
                    <img src={hinhAnh} alt="" className="" />
                    <h3>Tên Phim:{tenPhim}</h3>
                    <h3>
                      Mã vé: <span className="text-red-500">{maVe}</span>
                    </h3>
                    <div>
                      <h3>Danh Sách Ghế:</h3>
                      <div className="grid grid-cols-8">
                        {danhSachGhe.map((ghe, index) => {
                          return (
                            <span
                              key={index}
                              className="mr-2 text-red-400 font-semibold"
                            >
                              {ghe.tenGhe}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
