import React, { use } from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
import { AuthContext } from "./Context/AuthContext";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(alert("Sign out SucessFully!"))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/signup">signup</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        {user && user.email ? <div className="flex items-center gap-4">
          <h1>{user.displayName}</h1>
          <img className="w-10 border  rounded-full" src={user.photoURL} alt="" />
        </div> : ""}

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <button className="btn btn-primary px-10 ">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
