import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  bg-gray-800 relative text-center mt-auto ">
      <div className="footer-content my-10">
        <h1 className="text-5xl font-title font-bold text-emerald-500 text-center">
          NewsMan
        </h1>
        <ul className="flex items-center justify-center gap-5 py-10">
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-emerald-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-emerald-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-emerald-500 transition"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-emerald-500 transition"
            >
              Terms Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className=" bg-gray-900 p-3 absolute bottom-0 w-full mt-5">
        <p className="text-center text-gray-100">
          Designed By
          <span className="text-emerald-500 hover:text-gray-100"> Arif </span>&
          Developed By MERN stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
