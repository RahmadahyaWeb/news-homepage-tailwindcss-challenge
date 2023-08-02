import React from "react";
import Logo from "../../images/logo.svg";
import Menu from "../../images/icon-menu.svg";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav class="container p-6 mx-auto flex items-center">
          <div class="py-1">
            <img src={Logo} alt="logo" />
          </div>
          <ul class="hidden flex-1 justify-end items-center gap-12 text-Very-dark-blue font-semibold uppercase text-xs md:flex">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">New</li>
            <li class="cursor-pointer">Popular</li>
            <li class="cursor-pointer">Trending</li>
            <li class="cursor-pointer">Categories</li>
          </ul>
          <div class="flex md:hidden flex-1 justify-end items-center">
            <img src={Menu} alt="menu" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
