"use client";
import Link from "next/link";
import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Link href="/"><img src="nav.svg" alt="" /></Link>
          </div>
          <div className="nav__links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Pages</Link>
            <Link href="/news">Shop</Link>
            <Link href="/news">Projects</Link>
            <Link href="/news">News</Link>
          </div>
          <div className="nav__search">
            <input type="search" />
            <label>
              <img src="nav-search.svg" alt="" />
            </label>
          </div>
          <button>
            <img src="nav-cart.svg" alt="" />
            Cart(0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
