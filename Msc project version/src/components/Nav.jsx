import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    // Call the function when the component mounts
    checkLoginStatus();

    // Call the function whenever the route changes
  }, [location]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    setIsLogin(false);
    window.location = "/login";
  };

  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-10">
      <div className="text-2xl font-extrabold text-purple-600">LOGO</div>
      <div className="space-x-4">
        <Link
          to="/profile"
          className={`px-4 py-2 text-gray-700 hover:text-purple-600 text-lg font-semibold ${!isLogin && "hidden"}`}
        >
          Profile
        </Link>
        <Link
          to="/community"
          className="px-4 py-2 text-gray-700 hover:text-purple-600 text-lg font-semibold"
        >
          Community
        </Link>
        <button
          onClick={logout}
          className={`bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 active:bg-purple-700 active:shadow-inner transition-all duration-200 ease-in-out ${!isLogin && "hidden"}`}
        >
          Log Out
        </button>
        <Link
          to="/login"
          className={`bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 active:bg-purple-700 active:shadow-inner transition-all duration-200 ease-in-out ${isLogin && "hidden"}`}
        >
          Log In
        </Link>
      </div>
    </nav>  
  );
};

export default Nav;


