import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";
import { useEffect, useState } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Yükleme tamamlandığında loading durumunu false yap
  }, []);

  const removeFromFavorites = (productToRemove) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productToRemove.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <div>
      <Navbar favoritePage={true} />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
        {loading ? (
          // Eğer yükleme devam ediyorsa, loading göster
          Array.from({ length: favorites.length }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : favorites?.length > 0 ? (
          // Yükleme tamamlandı ve favoriler varsa favori ürünleri göster
          favorites.map((favorite) => (
            <ProductCard
              key={favorite.id}
              action={() => removeFromFavorites(favorite)}
              product={favorite}
              isFavorite={true}
              favoritePage={true}
            />
          ))
        ) : (
          // Yükleme tamamlandı ancak favori ürün yoksa bir mesaj göster
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
