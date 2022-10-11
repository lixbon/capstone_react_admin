import axios from "axios";
import { BASE_URL, https, TOKEN_CYBERSOFT } from "./configURL";

export const moviesServ = {
  // getListMovie: () => {
  //   return axios({
  //     url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`,
  //     method: "GET",
  //     headers: {
  //       TokenCybersoft: TOKEN_CYBERSOFT,
  //     },
  //   });
  // },
  getListMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
    return https.get(uri);
  },
  getMovieByTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
};
