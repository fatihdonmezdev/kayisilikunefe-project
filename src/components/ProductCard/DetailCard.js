import React from "react";
import { BsFillBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "@/store/FavoriteSlice";

const DetailCard = ({ product }) => {
  const favorites = useSelector((state) => state.favorites.favorite);
  const favoriteState = favorites.find((item) => item?.id === product?.id);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl h-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
          src={product?.imageUrl || "https://picsum.photos/350/300?random=11"}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.title}
          </h5>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product?.description} {product?.description} {product?.description}
          </div>
          <div className="mb-3 flex justify-between pt-8 font-normal text-gray-700 dark:text-gray-400">
            <div className="text-4xl font-bold">{product?.price} $</div>
          </div>
          <div
            onClick={() => dispatch(setFavorite(product))}
            className="flex justify-end"
          >
            {favoriteState ? (
              <BsFillBookmarkHeartFill size={40} />
            ) : (
              <BsBookmarkHeart size={40} />
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default DetailCard;
