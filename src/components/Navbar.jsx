import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { blackLogo, cancelIcon, searchLogo } from '../assets';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = ({ isActive }) => ({
    color: isActive ? '#12BA09' : '',
  });

  return (
    <>
      <nav className="mx-3 md:mx-5 pt-8">
        <div
          className={`max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 rounded-[10px] ${props.navStyle}  backdrop-blur-[10px] .nav-shadow`}
        >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-x-20">
              {/* Logo */}
              <div className="text-xl font-bold">
                <Link to="/">
                  <img src={blackLogo} alt="" className="w-full h-full" />
                </Link>
              </div>

              {/* Navigation Links (Desktop) */}
              <div className="hidden xl:flex space-x-6 font-medium">
                <NavLink
                  to="/"
                  style={navStyle}
                  className=" hover:text-blue-500"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  style={navStyle}
                  className="hover:text-blue-500"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/about"
                  style={navStyle}
                  state={{ scrollTo: 'project-section' }}
                  className="hover:text-blue-500"
                >
                  About us
                </NavLink>

                <NavLink
                  to="/blog"
                  style={navStyle}
                  className="hover:text-blue-500"
                >
                  Blog
                </NavLink>

                <NavLink
                  to="/contact"
                  style={navStyle}
                  className="hover:text-blue-500"
                >
                  Contact us
                </NavLink>
              </div>

              <div className="hidden md:block">
                <img src={searchLogo} alt="" className="w-6.5 fill-white/60" />
              </div>
            </div>

            <div className="hidden md:flex gap-x-4">
              <Link to="/contact">
                <button className="px-5 py-2 rounded-md border-2 cursor-pointer text-[#12BA09] border-[#12BA09]">
                  Apply
                </button>
              </Link>

              <Link to="/about">
                <button className="px-5 py-2 rounded-md border-2 cursor-pointer text-white bg-[#12BA09] border-[#12BA09]">
                  Learn
                </button>
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={` focus:outline-none cursor-pointer`}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay and Sidebar */}
        <div>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed xl:hidden bg-black opacity-50 inset-0 z-10"
            ></div>
          )}

          <div
            id="mobile-sidebar"
            className={`xl:hidden side-navbar ${isOpen ? 'show' : ''} w-64`}
          >
            <div
              onClick={() => setIsOpen(false)}
              className="mt-8 mb-2 flex justify-end cursor-pointer"
            >
              <img src={cancelIcon} alt="" className="w-7" />
            </div>

            <NavLink
              to="/"
              style={navStyle}
              className="block  hover:text-blue-500 py-3"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              style={navStyle}
              state={{ scrollTo: 'project-section' }}
              className="block  hover:text-blue-500  py-3"
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              style={navStyle}
              className="block  hover:text-blue-500  py-3"
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              style={navStyle}
              state={{ scrollTo: 'project-section' }}
              className="block  hover:text-blue-500  py-3"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              style={navStyle}
              className="block  hover:text-blue-500  py-3"
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
