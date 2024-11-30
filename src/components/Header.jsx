import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center w-full overflow-hidden">
      <h1 className="text-2xl font-bold">My Music Portfolio</h1>
      <nav>
        <a href="#about" className="mx-4 hover:underline">
          About
        </a>
        <a href="#reels" className="mx-4 hover:underline">
          Reels
        </a>
        <a href="#contact" className="mx-4 hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
