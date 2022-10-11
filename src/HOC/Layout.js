import React from "react";
import DashBoard from "../Components/DashBoard/DashBoard";
import Header from "../Components/Header/Header";

export default function Layout({ Component }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="static top-auto left-auto h-screen w-96 bg-slate-900">
        <DashBoard />
      </div>
      <div className="w-full overflow-scroll ">
        <Header />
        <div className="">
          <Component />
        </div>
      </div>
    </div>
  );
}
