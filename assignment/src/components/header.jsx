import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-brand" to="/">
        <h2>Database Webapp</h2>
      </Link>
      <Link className="header-admin-link" to="/admin">
        <h3>Admin</h3>{" "}
      </Link>
    </div>
  );
};

export default Header;
