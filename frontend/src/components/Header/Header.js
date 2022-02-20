import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${keyword}`);
  };

  return (
    <header>
      <div className="container">
        <nav className="py-5 border-b">
          <ul className="flex items-center justify-between w-full">
            <li className="">
              <h1 className="text-4xl font-title font-bold text-emerald-500">
                <Link to="/">NewsMan</Link>
              </h1>
            </li>
            <li className="w-2/4">
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="border rounded-none p-3 px-5 w-full focus:shadow focus:outline-none"
                  placeholder="Search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 bottom-0 pl-5 cursor-pointer flex items-center justify-center bg-emerald-500 p-4"
                >
                  <BsSearch className=" text-gray-100 z-20 hover:text-gray-200" />
                </button>
              </form>
            </li>
            <li className="">
              <Link
                to="/login"
                className="p-3 border flex items-center gap-2 px-5 bg-emerald-500 text-gray-100"
              >
                <FaUserAlt />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
