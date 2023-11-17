import Link from "next/link";
import { BsBookmark, BsFillBookmarkHeartFill } from "react-icons/bs";
import { use, useEffect, useState } from "react";

function ProductCard({ product, detailPage, isFavorite, action, hero }) {
  const [imageError, setImageError] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(
    isFavorite ? (
      <BsFillBookmarkHeartFill size={35} />
    ) : (
      <BsBookmark size={35} />
    )
  );
  const randimg = Math.floor(Math.random() * 100);
  const handleFavoriteAction = () => {
    action(); // Call the original action (handleFavorite) function
    setFavoriteIcon((prevIcon) =>
      prevIcon.type === BsBookmark ? (
        <BsFillBookmarkHeartFill size={35} />
      ) : (
        <BsBookmark size={35} />
      )
    );
  };
  return (
    <div>
      <div
        key={product?.id}
        className={
          hero
            ? "max-w-sm  mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
            : "max-w-lg  mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        }
      >
        <Link href={`/details/${product?.id}`}>
          <img
            className="p-4"
            src={
              imageError
                ? `https://picsum.photos/350/300?random=${randimg}`
                : product?.imageUrl
            }
            onError={() => setImageError(true)}
          />
        </Link>
        <div className="p-5">
          <div className="h-40">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product?.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product?.description
                ? product.description.split(" ").slice(0, 50).join(" ")
                : ""}
            </p>
          </div>
          <div className="flex mt-8 justify-between items-center">
            <Link href={`/details/${product?.id}`}>
              <button
                href="#"
                className="p-2 lg:p-4 text-white bg-slate-400 hover:bg-slate-600 font-medium rounded-lg text-sm text-center"
              >
                Read more
              </button>
            </Link>

            <button
              type="button"
              className="font-medium p-2 md:p-4 rounded-lg text-sm text-center  text-white bg-slate-900"
            >
              {product?.price}$
            </button>
            {/* Don't display anything if it's detailPage, also change the icon depending whether it is favorite or not. */}
            {detailPage || (
              <div>
                <span onClick={handleFavoriteAction}>
                  {/* Add a span to allow clicking on the icon */}
                  {favoriteIcon}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
ProductCard.defaultProps = {
  detailPage: false,
};

export default ProductCard;
