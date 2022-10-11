import React from "react";

const Button = ({ content, style, f }) => {
  return (
    <button
      onClick={f}
      className={
        `px-4 py-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-md hover:scale-110 hover:from-red-400 hover:to-purple-400 duration-300 cursor-pointer` +
        " " +
        style
      }
    >
      {content}
    </button>
  );
};

export default Button;
