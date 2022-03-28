import React from "react";
import { visibilityFilters } from "../constants/actions";

export const Footer = ({ active, setVisibilityFilter }) => (
  <div>
    <span>Show: </span>
    {Object.keys(visibilityFilters).map((item) => (
      <button
        disabled={active(item)}
        key={item}
        onClick={() => setVisibilityFilter(item)}
      >
        {item}
      </button>
    ))}
  </div>
);
