import { useEffect, useState } from "react";
import { fetchProducts } from "./api/hello";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToFavorite = (product) => {
    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    if (currentFavorites.find((item) => item.id === product.id)) {
      return;
    } else {
      const updatedFavorites = [...currentFavorites, product];
      getProducts();
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const getProducts = async () => {
    try {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error("Ürünler yüklenirken hata oluştu.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
        {loading ? (
        
          Array.from({ length: 20 }).map((_, index) => {
            return <CardSkeleton key={index} />;
          })
        ) : (
         
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              action={() => {
                addToFavorite(product);
              }}
            />
          ))
        )}
      </div>
    </>
  );
}
