"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-red-900 via-amber-700 to-red-900 sticky top-0 left-0 lg:static">
      <nav className="flex items-center justify-between py-4 px-14 2xl:px-32 relative">
        <div>
          <img
            src="/images/logo/logo.png"
            alt="logo"
            className="w-16 h-16"
          ></img>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-24 xl:gap-32">
            <div className="flex items-center gap-5 xl:gap-14">
              <Link href={"/"} className="link">
                Home
              </Link>
              <Link href={"/distribution"} className="link">
                Service
              </Link>
              <Link href={"/about"} className="link">
                About
              </Link>
              <Link href={"/faqs"} className="link">
                Faqs
              </Link>
              <Link href={"/contact"} className="link">
                Contact us
              </Link>
            </div>
            <div className="flex items-center gap-4 xl:gap-14">
              <Link href={"/signin"} className="link">
                Order Now
              </Link>
              <Link href={"/signup"} className="link">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div className="absolute block lg:hidden top-0 left-0 w-2/4 h-screen py-24 z-50 ">
              <div className="flex justify-center gap-24 xl:gap-32">
                <div className="flex flex-col  items-center gap-5 xl:gap-14">
                  <Link href={"/"} className="link">
                    Home
                  </Link>
                  <Link href={"/distribution"} className="link">
                    Service
                  </Link>
                  <Link href={"/about"} className="link">
                    About
                  </Link>
                  <Link href={"/faqs"} className="link">
                    Faqs
                  </Link>
                  <Link href={"/contact"} className="link">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="block lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div>
              <img
                src="/images/nav/cross.png"
                alt="cross"
                className="w-10 h-10"
              ></img>
            </div>
          ) : (
            <div>
              <img
                src="/images/nav/menu.png"
                alt="menu"
                className="w-10 h-10"
              ></img>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
