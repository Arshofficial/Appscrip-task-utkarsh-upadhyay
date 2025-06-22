"use client";
import React, { Dispatch, SetStateAction } from "react";
import FilterToggle from "./filter-toggle";
import QuickFilters from "./quick-filters";
import "./action-bar.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image?: string;
};

type ActionBarProps = {
  products: Product[];
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const ActionBar = ({
  products = [],
  drawerOpen,
  setDrawerOpen,
}: ActionBarProps) => {
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
