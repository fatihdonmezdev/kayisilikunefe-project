import { fetchProducts } from "@/pages/api/hello";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    } catch (error) {
      console.error("Ürünler yüklenirken hata oluştu.");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <img
        className="w-full"
        src="https://nextjs.org/static/twitter-cards/commerce.png"
      />
      <div className="text-3xl font-bold py-8 px-16">New Arrivals</div>

      <div className="grid grid-cols-4">
        {products.slice(1, 5).map((product) => (
          <ProductCard key={product.id} product={product} hero={true} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
