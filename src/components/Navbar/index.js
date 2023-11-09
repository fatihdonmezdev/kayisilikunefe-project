import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-lime-400 via-lime-700 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-500 dark:focus:ring-lime-600">
        <div className="max-w-screen-xl ml-10 flex flex-wrap p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block  border-2 rounded-full py-2 pl-3 pr-4 text-black"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="block  border-2 py-2 rounded-full pl-3 pr-4 text-black rounded"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
