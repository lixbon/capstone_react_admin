import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="sticky top-0 bg-slate-900 shadow-white shadow-md h-20 border-b z-30 flex justify-center items-center">
      <div className="max-w-layout mx-auto flex justify-end items-center">
        <UserNav />
      </div>
    </div>
  );
}
