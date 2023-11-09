import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";

function ProductCard({ product, action, isFavorite }) {
  return (
    <div
      key={product.id}
      className="max-w-md  mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="p-4" src={product?.images[0]} />
      </a>
      <div className="p-5">
        <div className="h-40">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product?.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product?.description
              ? product.description.split(" ").slice(0, 50).join(" ")
              : ""}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            href="#"
            className="p-2.5 m-2 w-[130px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm text-center"
          >
            Read more
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {product?.price}$
          </button>

          {isFavorite ? (
            <BsFillBookmarkHeartFill size={35} onClick={action} />
          ) : (
            <BsBookmarkHeart size={35} onClick={action} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
