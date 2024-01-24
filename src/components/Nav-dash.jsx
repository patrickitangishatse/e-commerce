import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Nav_dash = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo">
        <Link to={"/"}>
          <img src="assets/images/logo.png" alt="Company Logo" />
        </Link>
      </div>

      {/* Menu Links */}
      {show && (
        <div className="display-menu">
          <Link className="menu" to={"/"}>
            Home
          </Link>
          <Link className="menu" to={"/about"}>
            About Us
          </Link>
          <Link className="menu" to={"/Contact"}>
            Contact
          </Link>
          <Link className="menu" to={"/Products"}>
            Products
          </Link>
          <Link className="menu" to={"/Cart"}>
            Cart
          </Link>
          <Link className="menu" to={"/Login"}>
            Log Out
          </Link>
        </div>
      )}

      {/* toggle Icon */}
      <div className="icon">
        <button onClick={(e) => setShow(!show)} className="toggle">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Nav_dash;
