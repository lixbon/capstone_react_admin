import React from "react";
import Header from "../Components/Header/Header";

export default function Layout({ Component }) {
  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}
