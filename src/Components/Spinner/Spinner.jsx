import React from "react";
import { PuffLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function Spinner() {
  let isLoading = useSelector((state) => {
    return state.loadingSlice.isLoading;
  });
  return isLoading ? (
    <div
      style={{ marginTop: 0 }}
      className="h-screen w-screen fixed left-0 top-0 bg-[#0c0c0cec] flex justify-center items-center z-50"
    >
      <PuffLoader size={100} color="#ffb703" />
    </div>
  ) : (
    <></>
  );
}
