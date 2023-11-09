import React from "react";

function Navbar({ searchHandler, fetchProdData }) {
  return (
    <div>
      <nav className="bg-gray-300">
        <div className=" ml-10 flex p-4">
          <div className="w-full flex justify-between" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block font-bold hover:text-gray-500 py-2 pl-3 pr-4 text-black"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="block py-2 font-bold hover:text-gray-500 rounded-full pl-3 pr-4 text-black rounded"
                >
                  FAVORITES
                </a>
              </li>
            </ul>
            <ul className="flex justify-center items-center ">
              <form className="w-[500px]">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg"
                    placeholder="Search products..."
                    onChange={searchHandler}
                  ></input>
                  <button
                    type="submit"
                    onClick={fetchProdData}
                    className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
                  >
                    Search
                  </button>
                </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
