import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import DropdownMenu from "./dropdown";

function Navbar() {
  return (
    <div className="bg-slate-800 ">
      <div className="flex justify-between px-16 gap-4  py-8 text-xl  text-white">
        <Link href="/">
          <div>E-Commerce</div>
        </Link>
        <ul className="flex gap-8">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/favorites">
            <li>Favorites</li>
          </Link>
          <Link href="/signup">
            <li>Sign up</li>
          </Link>
          <DropdownMenu />
        </ul>
        <div>Searchbar</div>
      </div>
    </div>
  );
}

export default Navbar;
