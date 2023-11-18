import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CardSkeleton from "@/components/ProductCard/CardSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { loadFavoritesFromLocalStorage } from "../store/FavoriteSlice";
import { useEffect, useState } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch favorites data on the client side
    dispatch(loadFavoritesFromLocalStorage());
  }, []);
  const reduxFavorites = useSelector((state) => state.favorites.favorite);
  useEffect(() => {
    setFavorites(reduxFavorites);
  }, [reduxFavorites]);
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <ProductCard key={favorite.id} product={favorite} />
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
