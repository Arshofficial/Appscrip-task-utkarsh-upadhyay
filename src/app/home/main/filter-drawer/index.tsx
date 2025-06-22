"use client";
import React from "react";
import "./filter-drawer.css";

type FilterDrawerProps = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterDrawer = ({
  categories = [],
  selectedCategories,
  setSelectedCategories,
}: FilterDrawerProps) => {
  const toggleCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const updated = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "All"), category];
      setSelectedCategories(updated.length === 0 ? ["All"] : updated);
    }
  };

  return (
    <div className="filter-drawer-container">
      <div className="checkbox-group">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={selectedCategories.includes("All")}
            onChange={() => toggleCategory("All")}
          />
          All
        </label>
        {categories.map((cat) => (
          <label key={cat} className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterDrawer;
