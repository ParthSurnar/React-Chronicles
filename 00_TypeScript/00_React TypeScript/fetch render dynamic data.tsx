import React, { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  if (!products) return <p>Loading...</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
};

export default ProductList;
