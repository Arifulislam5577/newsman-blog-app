import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="py-5 border-b">
          <ul className="flex items-center justify-between w-full">
            <li className="w-3/4">
              <h1 className="text-4xl font-title font-bold text-gray-700">
                <a href="/">NewsMan</a>
              </h1>
            </li>
            <li className="w-1/4">
              <input
                type="text"
                className="border rounded-none p-2 px-5 w-full fucus:border-none"
                placeholder="Search..."
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
