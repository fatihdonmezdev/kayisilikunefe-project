import { useEffect, useState } from "react";
import { fetchFiltered, fetchProducts } from "../api/hello";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titleFilter, setTitleFilter] = useState("");

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

    return favorites.some((favorite) => favorite.id === product.id);
  };
  const searchHandler = (event) => {
    event.preventDefault();
    setTitleFilter(event.target.value);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar searchHandler={searchHandler} fetchProdData={getProducts} />
      <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-y-8">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => {
              return <CardSkeleton key={index} />;
            })
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                action={() => {
                  handleFavorite(product);
                }}
                isFavorite={checkIsFavorite(product)}
              />
            ))}
      </div>
    </>
  );
}
