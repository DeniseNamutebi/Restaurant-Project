import React, { useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import logo from "../images/restaurant.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user } = useAuth0();

  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  useEffect(() => {
    isAuthenticated &&
      getAccessTokenSilently().then((res) => console.log("Access Tkn", res));

    isAuthenticated && console.log("User", user);
  }, [isAuthenticated]);

  return (
    <div className="relative flex flex-col md:flex-row h-40 justify-between item-center md:h-24 md:justify-between  ">
      <div className="static pl-9">
        <img
          className="absolute object-cover h-12 w-12 pt-3 pb-2 md:h-24 md:w-24 "
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="pr-10 flex flex-row font-regular mt-2">
        <Link
          to="/"
          className="transition duration-150 ease-in-out cursor-pointer  hover:text-navy"
          href=""
        >
          <div className="p-6 pt-7 ">Home Page</div>
        </Link>
        <Link
          to="/menu"
          className="transition duration-150 ease-in-out cursor-pointer hover:text-navy"
        >
          <div className="p-6 pt-7">Menu</div>
        </Link>
        <Link
          to="/order"
          className="transition duration-150 ease-in-out cursor-pointer hover:text-navy"
        >
          <div className="p-6 pt-7">Current Order</div>
        </Link>
        <Link
          to="/booking"
          className="transition duration-150 ease-in-out cursor-pointer hover:text-navy"
        >
          <div className="p-6 pt-7">Book Table</div>
        </Link>
        <Link
          to="/contact"
          className="transition duration-150 ease-in-out cursor-pointer hover:text-navy"
        >
          <div className="p-6 pt-7">Contact Us</div>
        </Link>
      </div>
      {isAuthenticated ? (
        <div className="mt-4 mb-8 mx-8 flex flex-col">
          <span>Hi, {user.name}</span>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="btn"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="m-8">
          <button onClick={() => loginWithRedirect()} className="btn">
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
