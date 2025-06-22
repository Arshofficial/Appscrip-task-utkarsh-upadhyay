"use client";
import React, { useEffect, useState } from "react";
import ActionBar from "../action-bar";
import ProductGrid from "./product-grid";
import FilterDrawer from "./filter-drawer";
import "./main.css";

const Main = ({ products = [] }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product?.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    if (selectedCategories.includes("All")) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter((product) =>
          selectedCategories.includes(product?.category)
        )
      );
    }
  }, [selectedCategories, products]);

  return (
    <>
      <ActionBar
        products={filtered}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <div className="main-body-container">
        {drawerOpen && (
          <div className="drawer-container">
            <FilterDrawer
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        )}
        <div className="product-grid-container">
          <ProductGrid products={filtered} />
        </div>
      </div>
    </>
  );
};

export default Main;
