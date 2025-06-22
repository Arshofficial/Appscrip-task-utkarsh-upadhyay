"use client";
import React from "react";
import Image from "next/image";
import "./product-grid.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image?: string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products = [] }: ProductGridProps) => {
  return (
    <div className="main-container">
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <Image
              src={product.image || ""}
              alt={product.title}
              width={200}
              height={200}
              className="product-image"
              style={{ objectFit: "contain" }}
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>$ {product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
