import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { userLoginActions } from "../../redux/action/userActions";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const { userInfo, loading, error } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginActions(email, password));
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
          {error && (
            <div className="mb-3 ">
              <h2 className="p-3 bg-orange-500 text-gray-100 w-full">
                {error}
              </h2>
            </div>
          )}
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
              Create a new account?&nbsp;
              <Link
                to={`/signup?redirect=${redirect}`}
                className="text-emerald-500"
              >
                Signup
              </Link>
            </p>
          </div>
          <div className="mb-3">
            <button className="uppercase p-3 text-center bg-emerald-500 text-gray-100 w-full">
              {loading ? (
                <FaSpinner icon="spinner" className="spinner m-auto text-2xl" />
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
