"use client";
import React, { useState } from "react";
import "./quick-filters.css";

const QuickFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="quick-filters">
      <span className="filter-text" onClick={() => setIsOpen(!isOpen)}>
        {" "}
        {!isOpen ? "Recommended ⌄ " : "Recommended ╳ "}
      </span>
    </div>
  );
};
export default QuickFilters;
