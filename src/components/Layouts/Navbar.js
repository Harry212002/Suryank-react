import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assests/logo2.jpeg';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/service",
  },
  {
    id: 3,
    name: "Products",
    link: "/product",
  },
  {
    id: 4,
    name: "Clients",
    link: "/clients",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white duration-300 sticky top-0 z-50 shadow-sm">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link to="/">
                <img 
                  src={logo} 
                  alt="logo" 
                  className="w-[150px] h-[60px] object-cover hover:opacity-90 transition-opacity" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className="relative group">
                    <Link
                      to={link}
                      className={`text-lg font-medium py-4 transition-all duration-300 ${
                        currentPath === link 
                          ? "text-primary font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary"
                      }`}
                    >
                      {name}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                        currentPath === link ? "w-full" : "group-hover:w-full"
                      }`}></span>
                    </Link>
                  </li>
                ))}
                <Link to="/contact">
                  <button className="btn-primary  transition-all shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <DarkMode />
              </ul>
            </div>

            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1 
                  onClick={toggleMenu} 
                  className="cursor-pointer text-2xl text-gray-700 dark:text-gray-300 hover:text-primary transition-colors" 
                />
              ) : (
                <HiMenuAlt3 
                  onClick={toggleMenu} 
                  className="cursor-pointer text-2xl text-gray-700 dark:text-gray-300 hover:text-primary transition-colors" 
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Section */}
        <ResponsiveMenu showMenu={showMenu} currentPath={currentPath} />
      </nav>
    </>
  );
};

export default Navbar;