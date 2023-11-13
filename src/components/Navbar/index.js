import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

function Navbar({ fetchProdData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchProdData();
  };
  return (
    <div className="bg-slate-800 ">
      <div className="flex gap-4 justify-between px-16  py-8 text-xl  text-white">
        <Link href="/">
          <div>E-Commerce</div>
        </Link>
        <ul className="flex gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>Favorites</li>
        </ul>
        <div>Searchbar</div>
      </div>
    </div>
  );
}

export default Navbar;
