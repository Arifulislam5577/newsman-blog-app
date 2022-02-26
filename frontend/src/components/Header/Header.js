import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUserAlt,
  FaSignInAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaNewspaper,
  FaBars,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogOutAction } from "../../redux/action/userActions";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogOut = () => {
    dispatch(userLogOutAction());
    navigate("/");
  };

  return (
    <header>
      <div className="topbar py-1 bg-gray-200 hidden md:block">
        <div className="container">
          <div className="topbar-menu flex items-center justify-between">
            <ul className="left-menu flex items-center justify-between gap-5 uppercase">
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
            <ul className="right-menu flex items-center justify-between gap-5">
              <li>
                <Link to="#" className="text-xs">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs">
                  <FaNewspaper />
                </Link>
              </li>
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
      <div className="menu-bar w-full bg-gray-100 py-3">
        <div className="container flex items-center justify-between gap-3">
          <button className="flex items-center justify-between gap-2">
            <FaBars />
            Category
          </button>
          <ul className="w-32 md:w-32 text-center">
            <li className="md:w-2/4 lg:w-2/4 w-full order-2 "></li>
            {!userInfo && (
              <li className="uppercase order-1">
                <Link
                  to="/login"
                  className=" border flex items-center gap-2 p-2 text-xs text-emerald-500 border-emerald-500  justify-center"
                >
                  <FaUserAlt />
                  {userInfo ? userInfo.name : "LogIn"}
                </Link>
              </li>
            )}
            {userInfo && (
              <li className="uppercase order-1">
                <button
                  onClick={handleLogOut}
                  className=" border flex items-center gap-2 px-5 text-xs border-emerald-500 text-emerald-500 p-2 justify-center"
                >
                  <FaSignInAlt />
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

// // <ul className="left-menu flex items-center gap-5 uppercase">
//             <li>
//               <button className="text-xs">All Blogs</button>
//             </li>
//             <li>
//               <button className="text-xs">Internet</button>
//             </li>
//             <li>
//               <button className="text-xs">JavaScript</button>
//             </li>
//             <li>
//               <button className="text-xs">Lifestyle</button>
//             </li>
//             <li>
//               <button className="text-xs">News</button>
//             </li>
//             <li>
//               <button className="text-xs">React Js</button>
//             </li>
//             <li>
//               <button className="text-xs">Tech</button>
//             </li>
//             <li>
//               <button className="text-xs">Telephone</button>
//             </li>
//             <li>
//               <button className="text-xs">Travel</button>
//             </li>
//             <li>
//               <button className="text-xs">website</button>
//             </li>
//           </ul>
