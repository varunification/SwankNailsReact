import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const subProducts = [
    { name: 'Nail Paint', slug: 'nail-paint' },
    { name: 'Pedicure', slug: 'pedicure' },
    { name: 'Manicure', slug: 'manicure' },
    { name: 'Facial', slug: 'facial' },
    { name: 'Hair Styling', slug: 'hair-styling' },
    { name: 'Waxing', slug: 'waxing' },
    { name: 'Makeup', slug: 'makeup' },
    { name: 'Massage', slug: 'massage' },
    { name: 'Spa', slug: 'spa' },
    { name: 'Eyelash Extensions', slug: 'eyelash-extensions' },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsProductsHovered(true);
  };

  const handleMouseLeave = () => {
    // Add a slight delay before closing the dropdown
    const timeout = setTimeout(() => {
      setIsProductsHovered(false);
    }, 300); // 300ms delay
    setDropdownTimeout(timeout);
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-black">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="mx-auto max-w-screen-xl">
          <Link to="/" className="flex lg:items-center lg:w-auto">
            <img
              src='https://i.imgur.com/NL6Nxg0.png'
              className="mr-3 h-12 w-15"
              alt="Logo"
            />
          </Link>

          <ul className="sm:flex-column flex flex-row mt-3 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:items-center lg:w-auto justify-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Products
              </NavLink>
              {isProductsHovered && (
                <ul
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48"
                  onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over it
                  onMouseLeave={handleMouseLeave} // Close dropdown when leaving it
                >
                  {subProducts.map((product) => (
                    <li key={product.slug}>
                      <NavLink
                        to={`/product/${product.slug}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {product.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}