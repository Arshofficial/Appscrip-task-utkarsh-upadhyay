import React from "react";
import "./globals.css";
import Main from "./home/main";

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
      <Main products={products} />
    </>
  );
}
