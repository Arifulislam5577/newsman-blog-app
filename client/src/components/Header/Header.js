import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaSignInAlt, FaBars } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { userLogOutAction } from "../../redux/action/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogOut = () => {
    dispatch(userLogOutAction());
    navigate("/");
  };
  return (
    <header>
      <div className="topbar py-1 border-b ">
        <div className="container">
          <div className="topbar-menu flex items-center justify-between">
            <ul className="   left-menu flex items-center justify-between gap-5 uppercase">
              <li>
                <Link to="#" className="text-xs">
                  docs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs">
                  support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs">
                  contact
                </Link>
              </li>
            </ul>
            <ul className=" text-center">
              <li className="md:w-2/4 lg:w-2/4 w-full order-2 "></li>
              {!userInfo && (
                <li className="uppercase order-1">
                  <Link
                    to="/login"
                    className="  flex items-center gap-2  text-xs   justify-center"
                  >
                    <FiLogIn />
                    {userInfo ? userInfo.name : "LogIn"}
                  </Link>
                </li>
              )}
              {userInfo && (
                <li className="uppercase order-1">
                  <button
                    onClick={handleLogOut}
                    className="  flex items-center gap-2  text-xs border-emerald-500  justify-center"
                  >
                    <FaSignInAlt />
                    Log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="logo-area py-5">
        <div className=" w-full m-auto">
          <Link
            to="/"
            className="text-5xl flex gap-1 items-center justify-center font-title text-center font-bold text-emerald-500"
          >
            NewsMan
          </Link>
        </div>
        <p className="text-center text-gray-400 text-xs">
          Journalism Without Fear or Favour
        </p>
      </div>
      <div className="menu-bar w-full border-b border-t py-3 hidden md:block">
        <div className="container flex items-center justify-center gap-3">
          <ul className="left-menu  flex items-center gap-5 uppercase justify-center">
            <li>
              <Link className="text-xs" to={`/category/all`}>
                All Blogs
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/Internet`}>
                Internet
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/JavaScript`}>
                JavaScript
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/Lifestyle`}>
                Lifestyle
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/News`}>
                News
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/React`}>
                React Js
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/Tech`}>
                Tech
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/Telephone`}>
                Telephone
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/Travel`}>
                Travel
              </Link>
            </li>

            <li>
              <Link className="text-xs" to={`/category/website`}>
                website
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-b border-t py-3 block md:hidden">
        <div className="container">
          <button
            className="flex items-center justify-between gap-2"
            onClick={() => setActive(!active)}
          >
            <FaBars />
            Category
          </button>
          {active && (
            <ul className="left-menu  flex flex-col  gap-5 uppercase">
              <li className="mt-5">
                <Link className="text-xs" to={`/category/all`}>
                  All Blogs
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/Internet`}>
                  Internet
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/JavaScript`}>
                  JavaScript
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/Lifestyle`}>
                  Lifestyle
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/News`}>
                  News
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/React`}>
                  React Js
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/Tech`}>
                  Tech
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/Telephone`}>
                  Telephone
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/Travel`}>
                  Travel
                </Link>
              </li>

              <li>
                <Link className="text-xs" to={`/category/website`}>
                  website
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
