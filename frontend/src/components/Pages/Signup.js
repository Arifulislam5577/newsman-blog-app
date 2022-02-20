import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userSignUpAction } from "../../redux/action/userActions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { error, loading, userInfo } = useSelector((state) => state.userSignup);

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 3) {
      setMessage("Name should be at least 4 characters");
    } else if (password.length <= 5) {
      setMessage("Password should be at least 6 characters");
    } else {
      dispatch(userSignUpAction(name, email, password));
      setMessage("");
    }
  };

  useEffect(() => {
    if (Object.keys(userInfo ? userInfo : {}).length > 0) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  return (
    <section className="w-full py-5">
      <div className="container">
        <form className="w-3/4 m-auto" onSubmit={handleSubmit}>
          {message && (
            <div className="mb-3 ">
              <h2 className="p-3 bg-orange-500 text-gray-100 w-full">
                {message}
              </h2>
            </div>
          )}
          {error && (
            <div className="mb-3 ">
              <h2 className="p-3 bg-orange-500 text-gray-100 w-full">
                {error}
              </h2>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="name" className="font-medium my-2 block">
              Name
            </label>
            <input
              type="text"
              className="p-3 rounded-none w-full border focus:outline-none bg-gray-200"
              required
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="font-medium my-2 block">
              Email
            </label>
            <input
              type="email"
              className="p-3 rounded-none w-full border focus:outline-none bg-gray-200"
              required
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-medium my-2 block">
              Password
            </label>
            <input
              type="password"
              className="p-3 rounded-none w-full border focus:outline-none bg-gray-200"
              required
              placeholder="Enter Your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p className="text-gray-400">
              Already have an account?&nbsp;
              <Link
                to={`/login?redirect=${redirect}`}
                className="text-emerald-500"
              >
                Login
              </Link>
            </p>
          </div>
          <div className="mb-3">
            <button className="uppercase p-3 text-center bg-emerald-500 text-gray-100 w-full">
              {loading ? (
                <FaSpinner icon="spinner" className="spinner m-auto text-2xl" />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
