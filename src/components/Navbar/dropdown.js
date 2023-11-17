import Link from "next/link";
import React, { useState } from "react";

const DropdownMenu = () => {
  const [dropdown, SetDropdown] = useState(false);
  return (
    <div>
      <div
        onClick={() => SetDropdown((prev) => !prev)}
        className="relative z-10 inline-block text-left"
      >
        <div>
          <button
            type="button"
            className="inline-flex text-xl w-full justify-center items-center gap-x-1.5 rounded-md  text-white "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Edit
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className={dropdown ? "flex flex-col" : "hidden"} role="none">
            <Link
              href="/add-product"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Add Products
            </Link>
            <Link
              href="/edit-product/[id]"
              as="/edit-product/your-product-2"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Edit Products
            </Link>

            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Remove Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
