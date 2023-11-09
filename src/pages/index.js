import { useEffect, useState } from "react";
import { fetchFiltered, fetchProducts } from "./api/hello";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titleFilter, setTitleFilter] = useState("");

  const handleFavorite = (product) => {
    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    if (currentFavorites.find((item) => item.id === product.id)) {
      const updatedFavorites = currentFavorites.filter((item) => {
        return item.id !== product.id;
      });
      getProducts();
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...currentFavorites, product];
      getProducts();
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const getProducts = async () => {
    const fetchFunc = titleFilter ? fetchFiltered : fetchProducts;

    fetchFunc(titleFilter)
      .then((productsList) => {
        setProducts(productsList);
      })
      .catch((error) => {
        console.error("Bir hata oluştu:", error);
      });
    try {
      const allProducts = await fetchFunc();
      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error("Ürünler yüklenirken hata oluştu.");
    }
  };
  const checkIsFavorite = (product) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    return favorites.some((favorite) => favorite.id === product.id);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searchHandler = (event) => {
    setTitleFilter(event.target.value);
  };

  return (
    <>
      <Navbar searchHandler={searchHandler} fetchProdData={getProducts} />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
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
