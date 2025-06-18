import React from "react";
import "./globals.css";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // disabling caching
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts(); // fetch runs on the server

  return (
    <>
      <h2 style={{ marginBottom: "1rem" }}>Featured Products</h2>
      <div className="product-grid">
        {products?.map((product) => (
          <article className="product-card" key={product.id}>
            <Image
              src={product.image}
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
    </>
  );
}
