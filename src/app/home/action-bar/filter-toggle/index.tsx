import React from "react";
import "./filter-toggle.css";

const FilterToggle = ({ drawerOpen = false, setDrawerOpen = {} }) => {
  return (
    <>
      <span
        className="filter-toggle"
        onClick={() => {
          setDrawerOpen(!drawerOpen);
        }}
      >
        {!drawerOpen ? "> Show Filters" : "< Hide Filters"}
      </span>
    </>
  );
};

export default FilterToggle;
