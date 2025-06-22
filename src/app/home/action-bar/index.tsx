import React from "react";
import FilterToggle from "./filter-toggle";
import "./action-bar.css";
import QuickFilters from "./quick-filters";

const ActionBar = ({
  products = [],
  drawerOpen = false,
  setDrawerOpen = {},
}) => {
  return (
    <div className="actionbar-container">
      <div className="left-side">
        <h4 className="products-count" style={{ marginBottom: "1rem" }}>
          {products?.length} ITEMS
        </h4>
        <FilterToggle drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </div>
      <div className="right-side">
        <QuickFilters />
      </div>
    </div>
  );
};

export default ActionBar;
