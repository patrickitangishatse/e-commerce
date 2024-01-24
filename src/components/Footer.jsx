import React from "react";
import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <p>Copyrights © 2024 Kigali's Best Headsets. </p>
        <p>All Rights Reserved</p>
      </div>
      <div className="footer-links">
        <Link to="/" className="link">
          <GitHub />
        </Link>
        <Link to="/" className="link">
          <Instagram />
        </Link>
        <Link to="/" className="link">
          <LinkedIn />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
