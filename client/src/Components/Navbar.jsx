import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="font-effect-shadow-multiple">Workout Buddy</h1>
      </Link>

      {user && (
        <div className="logout">
          <span>{user.email}</span>
          <button onClick={handleClick}>LOGOUT</button>
        </div>
      )}

      {!user && (
        <div className="menu">
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
