import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
        {favorites?.map((favorite) => (
          <ProductCard product={favorite} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
