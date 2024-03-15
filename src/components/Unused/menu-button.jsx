import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="relative inline-block">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Open Menu"
        >
          <EllipsisVerticalIcon className="w-5 mr-2 mt-5 cursor-pointer" />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <button
              onClick={() => {
                toggleMenu();
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              Remove
            </button>
            <button
              onClick={() => {
                toggleMenu();
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              Mark as Solved
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuButton;
