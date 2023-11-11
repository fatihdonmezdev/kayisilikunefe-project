import Link from "next/link";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";

function ProductCard({
  product,
  action,
  isFavorite,
  detailPage,
  favoritePage,
}) {
  return (
    <div className={detailPage ? "flex justify-center items-center" : ""}>
      <div
        key={product?.id}
        className={
          detailPage
            ? "md:max-w-xl  mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
            : "max-w-md  mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        }
      >
        <Link href={`/details/${product?.id}`}>
          <img className="p-4" src={product?.images[0]} />
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
          <div className="flex justify-between items-center">
            {detailPage || (
              <Link href={`/details/${product?.id}`}>
                <button
                  href="#"
                  className="p-2 lg:p-4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm text-center"
                >
                  Read more
                </button>
              </Link>
            )}

            <button
              type="button"
              className="font-medium p-2 md:p-4 rounded-lg text-sm text-center  text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 "
            >
              {product?.price}$
            </button>

            {/* Don't display anything if it's detailPage, also change the icon depending whether it is favorite or not. */}
            {detailPage || (
              <div>
                {isFavorite ? (
                  <BsFillBookmarkHeartFill size={35} onClick={action} />
                ) : (
                  <BsBookmarkHeart size={35} onClick={action} />
                )}
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
