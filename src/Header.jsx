import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" navbar d-flex  justify-content-center align-items-center sticky-sm-top bg-dark text-white d-flex flex-row align-items-center justify-content-around "
    >
      <NavLink  to="/" className="fs-3 text-decoration-none text-white ">Üye Girişi</NavLink>
      <NavLink  to="/register" className="fs-3 text-decoration-none text-white">Üye Ol</NavLink>
    </nav>
  );
};

export default Header;
