import React from "react";

export const Todo = ({ text, onClick, completed }) => {
  return (
    <>
      <li
        onClick={onClick}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </li>
    </>
  );
};
