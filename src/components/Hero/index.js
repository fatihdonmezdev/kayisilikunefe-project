import { fetchProducts } from "@/pages/api/hello";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const handleFavorite = (product) => {
    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;

    if (currentFavorites.find((item) => item.id === product.id)) {
      updatedFavorites = currentFavorites.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedFavorites = [...currentFavorites, product];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    getProducts(); // Call getProducts only after updating favorites
  };
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
      <div className="border-2 mb-4 mx-8 border-blue-300"></div>
      <div className="grid grid-cols-5">
        {products.slice(15, 20).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            action={() => {
              handleFavorite(product);
            }}
            hero={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
