import { useEffect, useState } from "react";
import { fetchFiltered, fetchProducts } from "../api/hello";
import ProductCard from "@/components/ProductCard";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titleFilter, setTitleFilter] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      const fetchFunc = titleFilter ? fetchFiltered : fetchProducts;
      const allProducts = await fetchFunc(titleFilter);
      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error("Ürünler yüklenirken hata oluştu.");
      setLoading(false);
    }
  };
  const checkIsFavorite = (product) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
      return false; // No favorites present, so the product is not a favorite
    }

    return favorites.some((favorite) => favorite?.title === product?.title);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-y-8">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => {
              return <CardSkeleton key={index} />;
            })
          : products.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                isFavorite={checkIsFavorite(product)}
              />
            ))}
      </div>
    </>
  );
}
