"use client";
import React from "react";
import "./filter-toggle.css";

type FilterToggleProps = {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterToggle = ({
  drawerOpen = false,
  setDrawerOpen,
}: FilterToggleProps) => {
  return (
    <span className="filter-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
      {!drawerOpen ? "> Show Filters" : "< Hide Filters"}
    </span>
  );
};

export default FilterToggle;
