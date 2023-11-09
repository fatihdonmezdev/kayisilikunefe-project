function ProductCard({ product, action }) {
  return (
    <div
      key={product.id}
      className="max-w-md mt-4 ml-4 rounded-md bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="p-4" src={product?.images[0]} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product?.description}
        </p>

        <button
          href="#"
          className="p-2.5 m-2 w-[130px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm text-center"
        >
          Read more
        </button>
        <button
          onClick={action}
          className="p-2.5 m-2 w-[130px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
